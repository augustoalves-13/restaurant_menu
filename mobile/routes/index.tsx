import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"
import AuthRoutes from "./auth.routes"
import AppRoutes from "./app.routes"
import LoaderDialog from "@/components/core-components/Loader-dialog"

const Routes = () => {
  const {isAuthenticated, loading} = useContext(AuthContext)

  if(loading) return <LoaderDialog/>

  return isAuthenticated ? <AuthRoutes/> : <AppRoutes/>
}

export default Routes