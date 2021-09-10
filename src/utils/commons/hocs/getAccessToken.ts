import { setCredentials } from '../store/authSlice'

const getAccessToken = async ({ setAccessToken, dispatch }: any) => {
  const token = localStorage.getItem('wtw-token')
  setAccessToken(token)
  await dispatch(setCredentials({ token: token }))
  return token
}

export default getAccessToken
