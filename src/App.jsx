import './App.css'
import { ProductCard } from './components/productcard'
import { UserData } from './components/userdata'
import { Testing } from './components/testing'
import { Loginpage } from './pages/loginpage'
import { HomePage } from './pages/homepage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes path='/*'>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/*' element={<h1>404 Not Found</h1>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
