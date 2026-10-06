import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import shopifystore from './Redux/Slices/store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={shopifystore}>
      <BrowserRouter>
        <App />

      </BrowserRouter>
    </Provider>
  </StrictMode>,
)