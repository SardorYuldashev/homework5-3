import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import spinner from '../assets/spinner.gif'
import axios from 'axios'

const Details = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const { id } = useParams();

  async function getProducts () {
    setLoading(true)
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setLoading(false)
    setProduct(data.find(p => p.id + '' === id))
  }

  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    loading ? <div className='loading'><h1 className='loading-text'>Loading. Pease wait</h1> <img src={spinner} alt="" className='loading-img' /></div> : <div className='details'>
      <h2 className='product-title'>{product.title}</h2>
      <div className="product-imgBox">
        <img src={product.image} alt="image" className='product-img' />
      </div>
      <p className='product-text'>{product.description}</p>
      <p className='product-price'>{product.price} $</p>

      <Link to="/products" className='card-btn'>Back to products</Link>
    </div>
  )
}

export default Details
