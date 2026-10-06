import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="shop-footer">
      <div className="container">
        <div className="shop-footer__top">
          <div className="shop-footer__intro">
            <Link to="/" className="shop-footer__brand">
              <span className="shop-footer__brand-mark">S</span>
              <span>SHOPIFY</span>
            </Link>
            <p>Everyday essentials, thoughtfully picked for the way you live.</p>
           
          </div>

          <div className="shop-footer__links">
            <h2>Explore</h2>
            <Link to="/">Shop all</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Your cart</Link>
          </div>

          <div className="shop-footer__links">
            <h2>Need help?</h2>
            <a href="mailto:hello@shopify.store">hello@shopify.store</a>
            <a href="tel:+18005550148">+1 800 555 0148</a>
            <span>Mon–Fri, 9am–6pm</span>
          </div>

          
        </div>

        <div className="shop-footer__bottom">
          <span>© {new Date().getFullYear()} Shopify Store</span>
          <span>Made for curious shoppers <i className="fa-regular fa-heart"></i></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer