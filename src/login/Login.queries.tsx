import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginApi = createApi({
  reducerPath: 'loginApi',
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
    login: build.mutation({
      query: (body) => ({
        url: 'admin-login',
        method: 'POST',
        body: body,
      }),
    }),
    messages: build.query({
      query: () => 'admin/messages',
    }),
  }),
})

export const { useLoginMutation, useMessagesQuery } = loginApi
