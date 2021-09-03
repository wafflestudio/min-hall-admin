import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setCredentials } = slice.actions
export default slice.reducer
