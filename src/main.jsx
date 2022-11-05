import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './pages/Contact'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
