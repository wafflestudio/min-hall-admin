import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from '../src/utils/commons/store/Store'
export const GlobalContext = createContext({
  loginInfo: {},
  userId: '',
  userDetail: false,
  dateDetail: '',
  setDateDetail: (_: any) => {},
  setUserDetail: (_: any) => {},
  setLoginInfo: (_: any) => {},
  onClickUserDetailOpen: (_: any) => {},
  onClickUserDetailClose: (_: any) => {},
  setUserId: (_: any) => {},
  accessToken: '',
  setAccessToken: (_: any) => {},
})
function MyApp({ Component, pageProps }: AppProps) {
  const [userDetail, setUserDetail] = useState<boolean>(false)
  const [accessToken, setAccessToken] = useState<string>('')
  const [dateDetail, setDateDetail] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const [loginInfo, setLoginInfo] = useState({})
  const onClickUserDetailOpen = (event: any) => {
    setUserDetail(true)
    setUserId(event.target.id)
  }
  const onClickUserDetailClose = () => {
    setUserDetail(false)
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>민상렬홀 어드민</title>
      </Head>
      <Provider store={store}>
        <GlobalContext.Provider
          value={{
            userDetail,
            setUserDetail,
            onClickUserDetailClose,
            onClickUserDetailOpen,
            accessToken,
            setAccessToken,
            dateDetail,
            setDateDetail,
            userId,
            setUserId,
            loginInfo,
            setLoginInfo,
          }}
        >
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </Provider>
    </>
  )
}
export default MyApp
