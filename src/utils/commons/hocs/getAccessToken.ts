import { setCredentials } from '../store/authSlice'

const getAccessToken = async ({ setAccessToken, dispatch }: any) => {
  const token = localStorage.getItem('wtw-token')
  await setAccessToken(token)
  dispatch(setCredentials({ token: token }))
  return token
}

export default getAccessToken
