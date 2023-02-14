import { Routes, Route, Navigate } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Details from './Pages/Details'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Products from './Pages/Products'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound to="/" />} />
      </Routes>
    </div>
  )
}

export default App
