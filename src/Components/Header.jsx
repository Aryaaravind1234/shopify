import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'

import logo from '../assets/shop.png'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { searchProduct } from '../Redux/Slices/ProductSlice'

function Header({ insideLanding }) {

  const dispatch = useDispatch()

  const wishlist = useSelector(state => state.wishlist)
  const cart = useSelector(state => state.cart)

  return (
    <Navbar expand="lg" className="bg-primary">

      <Container>

        <Navbar.Brand className="align-items-center d-flex">

          <Link to="/" className="text-decoration-none">

            <img
              src={logo}
              alt="Shopify"
              width="40px"
            />

            <span className="text-light fw-bold ms-3">
              SHOPIFY
            </span>

          </Link>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          {/* Search */}

          {insideLanding && (
            <input
              onChange={(e) =>
                dispatch(searchProduct(e.target.value))
              }
              type="text"
              className="form-control w-50 ms-auto rounded"
              placeholder="search by product name"
            />
          )}

          <Nav className="ms-auto">

            {/* Wishlist */}
<Nav.Link as={Link} to="/wishlist">
  <i className="fa-solid fa-heart text-danger fa-2xl"></i>

  <Badge className="fs-5 ms-1">
    {wishlist?.length || 0}
  </Badge>
</Nav.Link>


            {/* Cart */}

            <Nav.Link as={Link} to="/cart">

              <i className="fa-solid fa-cart-shopping text-success fa-2xl"></i>

              <Badge className="fs-5 ms-1">
                {cart.length}
              </Badge>

            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default Header