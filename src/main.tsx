import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css/bundle'
import '@/styles/index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
