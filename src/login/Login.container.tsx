import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../../pages/_app'
import LoginUI from './Login.presenter'
import { useLoginMutation } from './Login.queries'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../utils/commons/store/authSlice'

const Login = () => {
  const [loginActive, setLoginActive] = useState({
    idActive: false,
    passwordActive: false,
  })
  const dispatch = useDispatch()
  const router = useRouter()
  const [buttonActive, setButtonActive] = useState(true)
  const { setAccessToken, setLoginInfo } = useContext(GlobalContext)
  const [loginCheck] = useLoginMutation()

  const idRef = useRef<any>()
  const passwordRef = useRef<any>()
  useEffect(() => {
    if (loginActive.idActive && loginActive.passwordActive) {
      setButtonActive(false)
    }
  }, [loginActive.idActive, loginActive.passwordActive])

  const loginInputColorChange = async (e: any) => {
    if (e.target.id === 'id') {
      if (e.target.value === '') {
        setLoginActive({
          ...loginActive,
          idActive: false,
        })
      } else if (e.target.value !== '') {
        setLoginActive({
          ...loginActive,
          idActive: true,
        })
      }
    }
    if (e.target.id === 'password') {
      if (e.target.value === '') {
        setLoginActive({
          ...loginActive,
          passwordActive: false,
        })
      } else if (e.target.value !== '') {
        setLoginActive({
          ...loginActive,
          passwordActive: true,
        })
      }
    }
  }

  const loginValidation = async () => {
    const login = {
      username: idRef.current.value,
      password: passwordRef.current.value,
    }
    const response_temp = await loginCheck(login)

    //@ts-ignore
    if (response_temp?.data?.token) {
      const response = await loginCheck(login).unwrap()
      if (response.token) {
        localStorage.setItem('wtw-token', response.token)
      }
      setAccessToken(response.token)
      setLoginInfo(login)
      dispatch(setCredentials({ token: response.token }))
      alert('환영합니다!')
      router.push('/')
      //@ts-ignore
    } else if (response_temp?.error?.status === 400) {
      passwordRef.current.style.border = '3px solid red'
      alert('등록되지 않은 아이디 혹은 비밀번호입니다')
    }
  }

  return (
    <LoginUI
      loginActive={loginActive}
      loginInputColorChange={loginInputColorChange}
      buttonActive={buttonActive}
      idRef={idRef}
      passwordRef={passwordRef}
      loginValidation={loginValidation}
    />
  )
}

export default Login
