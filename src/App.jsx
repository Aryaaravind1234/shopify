import { Routes, Route } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer'

import Landing from './Pages/Landing'
import Product from './Pages/Product'
import Wishlist from './Pages/WishList'
import Cart from './Pages/Cart'
import PNF from './Pages/PNF'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id/view' element={<Product />} />
        <Route path='*' element={<PNF />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App