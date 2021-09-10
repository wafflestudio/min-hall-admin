import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blockApi = createApi({
  reducerPath: 'blockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://minhall-api.wafflestudio.com/',
    prepareHeaders: (headers, { getState }) => {
      //@ts-ignore
      const token = getState().auth?.token?.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({
    student_block: build.mutation({
      query: (student_id) => ({
        url: `admin/student-block/${student_id}`,
        method: 'POST',
      }),
    }),
    student_unblock: build.mutation({
      query: (student_id) => ({
        url: `admin/student-unblock/${student_id}`,
        method: 'POST',
      }),
    }),
  }),
})

export const { useStudent_blockMutation, useStudent_unblockMutation } = blockApi
