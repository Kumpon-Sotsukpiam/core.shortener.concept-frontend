import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import authService from '../services/auth.service'

export const RouterGuard = ({ children }: any) => {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    authCheck(router.asPath)
    const hideContent = () => setAuthorized(false)

    router.events.on('routeChangeStart', hideContent)
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [])

  function authCheck(url: string) {
    const publicPaths = [
      '/auth/signin/identifier',
      '/auth/signup/createaccount',
    ]
    const path = url.split('?')[0]
    if (!authService.token && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push({
        pathname: '/auth/signin/identifier',
        query: { returnUrl: router.asPath },
      })
    } else {
      setAuthorized(true)
    }
  }
  return authorized && children
}
