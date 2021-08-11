import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import HeaderUI from './Header.presenter'

const Header = () => {
  const router = useRouter()
  const MainPageRoute = () => {
    router.push('/')
  }
  const [menuClick, setMenuClick] = useState({
    seat: true,
    chat: false,
    listbullets: false,
  })
  useEffect(() => {
    if (router.pathname === '/message_popup') {
      const temp = {
        seat: false,
        chat: false,
        listbullets: false,
      }
      const result = {
        ...temp,
        chat: true,
      }
      setMenuClick(result)
    }
    if (router.pathname === '/user_management') {
      const temp = {
        seat: false,
        chat: false,
        listbullets: false,
      }
      const result = {
        ...temp,
        listbullets: true,
      }
      setMenuClick(result)
    }
  }, [])

  const onClickMenuList = async (event: any) => {
    const temp = {
      seat: false,
      chat: false,
      listbullets: false,
    }
    const result = {
      ...temp,
      [event.target.id]: true,
    }
    await setMenuClick(result)
    if (event.target.id === 'seat') {
      router.push('/')
    } else if (event.target.id === 'chat') {
      router.push('/message_popup')
    } else if (event.target.id === 'listbullets') {
      router.push('/user_management')
    } else {
      window.alert('404 오류입니다.')
    }
  }

  return (
    <HeaderUI
      MainPageRoute={MainPageRoute}
      menuClick={menuClick}
      onClickMenuList={onClickMenuList}
    />
  )
}

export default Header
