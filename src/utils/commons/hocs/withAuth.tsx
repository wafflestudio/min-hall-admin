import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GlobalContext } from '../../../../pages/_app'
import getAccessToken from './getAccessToken'

export default function withAuth(Component: any) {
  return function temp(props: any) {
    const router = useRouter()
    const { setAccessToken, accessToken } = useContext(GlobalContext)
    const dispatch = useDispatch()

    useEffect(() => {
      if (accessToken) return

      const restoreAcessToken = async () => {
        const newaccessToken = await getAccessToken({
          setAccessToken,
          dispatch,
        })
        if (!newaccessToken) router.push('/login')
      }
      restoreAcessToken()
    }, [])
    if (!accessToken) return <></>
    return <Component {...props} />
  }
}
