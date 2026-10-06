import React from 'react'
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/Slices/CartSlice';
import { addToCart } from '../Redux/Slices/CartSlice';
 function Wishlist() {
  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();


  const handleCart = (product) => {
    let existingProduct = cart.find(pro => pro.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert("product quantity incremented")
      dispatch(removeFromWishlist(product.id))
    }
    else {
      dispatch(addToCart(product))
      dispatch(removeFromWishlist(product.id))
    }
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className='row'>
          {
            wishlist?.length > 0 ?
              wishlist?.map(pro => (
                <div className='col-lg-3'>
                  <Card className='p-2 shadow-rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pro.thumbnail} style={{ 'height': '250px' }} />
                    <Card.Body>
                      <Card.Title className='text-center'>{pro.title.slice(0, 10)}......</Card.Title>

                      <div className='d-flex align-items-center justify-content-between'>

                        <button onClick={() => dispatch(removeFromWishlist(pro?.id))} className='btn'><i class="fa-solid fa-heart-circle-xmark  fa-2xl text-danger"></i></button>
                        <button className='btn' onClick={() => handleCart(pro)}><i class="fa-solid fa-cart-plus fa-2xl text-success"></i></button></div>

                    </Card.Body>
                  </Card>

                </div>
              ))
              :
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <img src="https://i.pinimg.com/736x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
                <h1>Empty Wishlist</h1>
              </div>
          }



          <div className='col-lg-3'>

          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist