import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://minhall-api.wafflestudio.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token?.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({
    reservation_log: build.query({
      query: () => 'admin/reservations-log',
    }),
    reservation_status: build.query({
      query: (designatedDate) => {
        return {
          url: 'admin/reservation-status',
          params: { date: designatedDate },
        }
      },
    }),
    reservation_detail: build.query({
      query: (student_id) => `admin/reservations/${student_id}`,
    }),
  }),
})

export const seatApi = createApi({
  reducerPath: 'seatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://minhall-api.wafflestudio.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token?.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({
    seat_enable: build.mutation({
      query: (body) => ({
        url: 'admin/seat-enable',
        method: 'POST',
        body: body,
      }),
    }),
    seat_disable: build.mutation({
      query: (body) => ({
        url: 'admin/seat-disable',
        method: 'POST',
        body: body,
      }),
    }),
  }),
})

export const {
  useReservation_logQuery,
  useReservation_statusQuery,
  useReservation_detailQuery,
} = reservationApi

export const { useSeat_disableMutation, useSeat_enableMutation } = seatApi
