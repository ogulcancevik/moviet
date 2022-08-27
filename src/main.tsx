import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css/bundle'
import 'animate.css'
import '@/styles/index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
