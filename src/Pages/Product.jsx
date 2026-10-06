import React, { useEffect, useState } from 'react'


import Header from '../components/Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { addToWishlist } from '../Redux/Slices/WishlistSlice'
import { addToCart } from '../Redux/Slices/CartSlice'


function Product() {

  const { id } = useParams()

  const dispatch = useDispatch()

  const [product, setProduct] = useState({})

  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)


  useEffect(() => {

    const storedProducts = localStorage.getItem('products')

    if (storedProducts) {

      const allProducts = JSON.parse(storedProducts)

      const selectedProduct = allProducts.find(
        pro => pro.id == id
      )

      setProduct(selectedProduct || {})
    }

  }, [id])


  const handleWishlist = () => {

    const existingProduct = wishlist.find(
      pro => pro.id == product.id
    )

    if (existingProduct) {

      alert('Already added to wishlist')

    } else {

      dispatch(addToWishlist(product))

      alert('Product added to wishlist')

    }
  }


  const handleCart = () => {

    const existingProduct = cart.find(
      pro => pro.id == product.id
    )

    if (existingProduct) {

      dispatch(addToCart(product))

      alert('Product quantity incremented')

    } else {

      dispatch(addToCart(product))

    }
  }


  return (
    <>
      <Header />

      <Row className="my-5">

        <Col>
          <img
            src={product.thumbnail}
            alt={product.title}
            height="300px"
          />
        </Col>

        <Col>

          <h2>
            {product.brand}
            <br />
            <span>{product.title}</span>
          </h2>

          <h1 className="text-success">
            ${product.price}
          </h1>

          <p
            style={{ textAlign: 'justify' }}
            className="my-3"
          >
            {product.description}
          </p>

          <div className="d-flex align-items-center justify-content-between">

            <button
              className="btn"
              onClick={handleWishlist}
            >
              <i className="fa-solid fa-heart-circle-plus fa-2xl text-danger"></i>
            </button>

            <button
              className="btn"
              onClick={handleCart}
            >
              <i className="fa-solid fa-cart-plus fa-2xl text-success"></i>
            </button>

          </div>

        </Col>

      </Row>
    </>
  )
}

export default Product