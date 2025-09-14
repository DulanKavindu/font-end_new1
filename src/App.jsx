import './App.css'
import { ProductCard } from './components/productcard'

import { Loginpage } from './pages/loginpage'
import { HomePage } from './pages/homepage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { SignupPage } from './pages/sinuppage'
import { AdminPage } from './pages/addminpage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <BrowserRouter>
    <Toaster></Toaster>
    <Routes path='/*'>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/signup'element={<SignupPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/*' element={<HomePage/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
