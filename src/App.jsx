import './App.css'
import { ProductCard } from './components/productcard'

import { Loginpage } from './pages/loginpage'
import { HomePage } from './pages/homepage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { SignupPage } from './pages/sinuppage'
import { Addminpage } from './pages/addminpage'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes path='/*'>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/signup'element={<SignupPage/>}/>
      <Route path='/addmin/*' element={<Addminpage/>}/>
      <Route path='/*' element={<HomePage/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
