import type { ReactNode } from "react"
import { Navigate } from "react-router"
import useAuth from "../hooks/useAuth"

type PublicRouteProps = {
  children: ReactNode;
};

// For pages only logged-out users should see (e.g. login)
const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isLoading, isAuthenticated } = useAuth()

  // While auth is being checked, show a spinner
  if (isLoading) return <p>Loading...</p>

  // Already logged in -> go to the dashboard
  if (isAuthenticated) return <Navigate to="/" replace />

  // Logged out -> render the page
  return children
}

export default PublicRoute
