import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useState } from 'react'
export const GlobalContext = createContext({
  userDetail: false,
  setUserDetail: (_: any) => {},
  onClickUserDetailOpen: (_: any) => {},
  onClickUserDetailClose: (_: any) => {},
})
function MyApp({ Component, pageProps }: AppProps) {
  const [userDetail, setUserDetail] = useState<boolean>(false)
  const onClickUserDetailOpen = () => {
    setUserDetail(true)
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
      <GlobalContext.Provider
        value={{
          userDetail,
          setUserDetail,
          onClickUserDetailClose,
          onClickUserDetailOpen,
        }}
      >
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}
export default MyApp
