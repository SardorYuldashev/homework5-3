import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json'
import axios from 'axios'
import spinner from '../assets/spinner.gif'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  async function getProducts() {
    setLoading(true)
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setLoading(false)

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    loading ? <div className='loading'><h1 className='loading-text'>Loading. Pease wait</h1> <img src={spinner} alt="" className='loading-img' /></div> : <div className='card-pole'>
      <ul className='card-box'>
        {products.map(p => (
          <li key={p.id} className="product-card">
            <div className="card-left">
              <h2 className='card-title'>{p.title}</h2>
              <p className='card-price'>{p.price} $</p>
            </div>

            <div className="card-right">
              <div className="card-imgBox">
                <img src={p.image} alt="" className='card-img' />
              </div>
              <Link to={`/product-details/${p.id}`} className="card-btn">Read more</Link>
            </div>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Products
