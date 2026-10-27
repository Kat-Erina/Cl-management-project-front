import type { ReactNode } from "react"
import { Navigate } from "react-router"
import useAuth from "../hooks/useAuth"

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, isAuthenticated } = useAuth()

  // While auth is being checked, show a spinner
  if (isLoading) return <p>Loading...</p>

  // Not logged in -> go to the login page
  if (!isAuthenticated) return <Navigate to="/login" replace />

  // Logged in -> render the app
  return children
}

export default ProtectedRoute
