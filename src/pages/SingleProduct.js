import React, { useEffect } from 'react'
import styled from 'styled-components'
import Stars from '../components/Stars'
import { useParams } from 'react-router-dom'
const url = 'https://fakestoreapi.com/products/'

const SingleProduct = () => {
  const [product, setProduct] = React.useState()
  const {id} = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        setProduct(data)
      }
    fetchProduct()
  }, [id])
  
 return (
   <Wrapper>
     {!product 
      ? (<p style={{color: 'gray'}}>loading....</p>) 
      : (
        <div className='product-wrapper'>
            <img src={product.image} alt={id} />
            <div className='product-info'>
               <p>{product.title}</p>
               <p>Price: ${product.price}</p>
               <p style={{display: 'flex'}}>Rating: <Stars stars={product.rating.rate} style={{marginLeft: '.25em'}}/> </p>
              <div className="divider"></div>
              <p>{product.description}</p>
            </div>
        </div>
      )}
    </Wrapper>
 )
}


const Wrapper = styled.div`
  width: 1100px;
  max-width: 100%;
  margin: 6em auto 0;

  .product-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0 2em;
  }
  .product-info {
    padding-top: 2em;
  }
  img {
    width: 400px;
    max-width: 100%;
  }
  p:first-child { 
    color: black;
    font-weight: bold;
  }
  .divider {
    height: 1px;
    width: 100%;
    background-color: gray;
    margin: 1em 0;
  }

@media (min-width: 800px){
  .product-wrapper {
    display: grid;
    grid-template-columns: .75fr 1fr;
    gap: 2em;

  .product-info {
     padding-top: 0;
  }

  }
  img {
    max-width: 100%;
  }
}
`

export default SingleProduct