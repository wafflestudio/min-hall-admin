import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
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
    get_settings: build.query({
      query: () => 'admin/settings',
    }),
    patch_settings: build.mutation({
      query: (body) => ({
        url: 'admin/settings',
        method: 'PATCH',
        body: body,
      }),
    }),
  }),
})

export const { useGet_settingsQuery, usePatch_settingsMutation } = settingsApi
