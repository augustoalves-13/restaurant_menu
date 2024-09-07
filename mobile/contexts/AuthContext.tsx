import { AuthTypes } from "@/types/authTypes"
import { UserTypes } from "@/types/userTypes"
import fetcher from "@/utils/request"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useEffect, useState } from "react"

type SignInProps = {
  email: string
  password: string
}

type AuthContextData = AuthTypes & {
  signIn: (credentials: SignInProps) => Promise<void>
  loading: boolean
  loadingAuth: boolean
}

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserTypes>({
    id: '',
    name: '',
    email: '',
    token: ''
  })
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(false) 

  const isAuthenticated = !!user.name

  useEffect(() => {
    const getSession = async () => {
      const user = await AsyncStorage.getItem('@user-credentials')
      
      const hasLoggedUser: UserTypes = JSON.parse(user ?? '{}')

      if(!Object.keys(hasLoggedUser).length)
        return;

      setUser(hasLoggedUser)
      // await signIn({email: hasLoggedUser?.email, password: hasLoggedUser?.password})
    }

    getSession()
  },[])

  const signIn = async ({email, password}: SignInProps) => {
    setIsLoadingAuth(true)

    try{
      const request = await fetcher('session', {method: 'POST', body: {
        email,
        password
      }}) 

      await AsyncStorage.setItem('@user-credentials', JSON.stringify(request?.data))

      setUser(request?.data)
      setIsLoadingAuth(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, signIn, loading, loadingAuth: isLoadingAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider