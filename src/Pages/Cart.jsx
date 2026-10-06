import React from 'react'
import Header from '../Components/Header'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart, emptyCart } from '../Redux/Slices/CartSlice';


function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const checkout=()=>{
    alert("order placed successfully..thankyou for shopping with us")
    dispatch(emptyCart())
  }
  return (
   <div>
      <Header />
      <div className='text-center'>
        <h1>Cart Summary</h1>
      </div>
      
      {
        cart?.length > 0 ?

         <div className='row my-5'>
            <Row>
  
              <Col className='col-lg-8'>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map((product, index) => (
                        <tr key={product.id}>
                          <td>{index + 1}</td>
                          <td>{product.title}</td>
                          <td><img src={product.thumbnail} style={{ height: '70px', width: '90px' }} /></td>
                          <td>
                        <div className='d-flex align-items-center'>
                          <button className='btn' onClick={()=>dispatch(decrementQuantity(product?.id))}>-</button>
                          <input type="text" style={{ width: '10px', border: 'none' }}
                            className='border-none' value={product?.quantity} />
                          <button className='btn' onClick={()=>dispatch(incrementQuantity(product?.id))}>+</button>
                        </div>
                      </td>
                          {/* <td>{product?.quantity}</td> */}
                          <td>{product.price}</td>
  
                          <td>${product.totalPrice}</td>
                          <td>
                            <button className='btn' onClick={() => dispatch(removeFromCart(product.id))}>
                              <i className="fa-solid fa-trash text-danger"></i>
                            </button>
                          </td>
                        </tr>
  
                      ))
                    }
                  </tbody>
                </Table>
<button className='btn btn-success ms-5'>SHOP MORE</button>  
              <button className='btn btn-danger ms-5'onClick={() => dispatch(emptyCart())}>EMPTY CART</button>
              </Col>
           
                    <div className='col-lg-4'>
                       <div className='shadow rounded p-5 '>
  
                  <h1 className='text-danger fs-4 fw-bold'>Total Products<span className='text-danger'>:{cart?.length}</span></h1>
                  <h1 className='text-danger fs-4 fw-bold mt-3' >Total Price:<span className='text-danger'>{cart?.reduce((sum,pro)=>sum+pro.totalPrice,0)}</span></h1>
<button className='btn btn-success mt-3' onClick={()=>(checkout())}>CHECKOUT</button>  
                </div>
                    </div>
               </Row>
         </div>

          :
         <div className='text-center my-5'>
          <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" style={{width:'250px', height:'300px'}}/>
          <h3>Empty Cart</h3>
         </div>
      }

    </div>
  )
}

export default Cart