import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import  AdminLayout from './layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ui/ProtectedRoute'
import PublicRoute from './ui/PublicRoute'
import Login from './pages/Login'
import Articles from './pages/Articles'
import Doctors from './pages/Doctors'
import Media from './pages/Media'
import Content from './pages/Content'

function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
  <Route index element={<Dashboard/>}></Route>
  <Route path='articles' element={<Articles/>}></Route>
    <Route path='doctors' element={<Doctors/>}></Route>
     <Route path='media' element={<Media/>}></Route>
      <Route path='content' element={<Content/>}></Route>
</Route>
<Route path='login' element={<PublicRoute><Login/></PublicRoute>}></Route>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
