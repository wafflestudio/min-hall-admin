import { configureStore } from '@reduxjs/toolkit'
import { loginApi } from '../../../login/Login.queries'
import { reservationApi, seatApi } from '../../../main/seatmap/SeatMap.queries'
import { settingsApi } from '../../../main/seatoption/SeatOption.queries'
import { blockApi } from '../../../management/Management.queries'
import { messageApi } from '../../../message_popup/Message.queries'
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
    [seatApi.reducerPath]: seatApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [blockApi.reducerPath]: blockApi.reducer,
    auth: authReducer,
  },
})

export default store
