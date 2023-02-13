import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Pay from './pages/Pay'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Success from './pages/Success'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const user = useSelector(state=>state?.user?.currentUser)
  return (
    <>
    <Routes>
      <Route path='/' element={  <Home/>}/>
      <Route path='/register' element={  <Register/>}/>
     {/* {user ? <Route path="*" element={<Navigate to='/'/>}/> : <Login/>  } */}
   <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      {/* <Route path='/login' element={  <Login/>}/> */}
      <Route path='/cart' element={  <Cart/>}/>
      <Route path='/products/:category' element={  <ProductList/>}/>
      <Route path='/product/:id' element={  <Product/>}/>
      <Route path='/success' element={  <Success/>}/>
      <Route path='/pay' element={  <Pay/>}/>
    </Routes>
 <ToastContainer/>
    </>
  )
}

export default App