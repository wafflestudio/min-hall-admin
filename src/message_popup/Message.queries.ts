import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const messageApi = createApi({
  reducerPath: 'messageApi',
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
    post_popupMessage: build.mutation({
      query: (body) => ({
        url: 'admin/popup-message',
        method: 'POST',
        body: body,
      }),
    }),
    get_messages: build.query({
      query: () => 'admin/messages',
    }),
    data_sorted: build.query({
      query: (data) => {
        return {
          url: 'admin/students',
          params: { sort_by: data },
        }
      },
    }),
  }),
})

export const {
  useGet_messagesQuery,
  usePost_popupMessageMutation,
  useData_sortedQuery,
} = messageApi
