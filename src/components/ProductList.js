import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ProductList = ({id, title, price, description, image}) => {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <article>
          <img src={image} alt={id} />
          <div className='footer'>
            <p>{title}</p>
            <p>${price}</p>
            <p>{description.length > 1 ? description.substr(0,100)+'...' : description}</p>
            <button className='btn'><Link to={`/product/${id}`}>more info</Link></button>
          </div>
        </article>
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
   width: 1100px;
   max-width: 100%;
   margin: 0 auto;
   
   display: grid;
   justify-items: center;
   article {
      width: 320px;
      max-width: 100%;
      margin: 2em 0;

      display: grid;
      grid-template-columns: 1fr;
      justify-items: left;
    
   }
   .footer p:first-child {
     color: black;
   }
   img {
     width: 200px;
     height: 200px;
     object-fit: scale-down;
   }
   .btn {
      font-family: inherit;
      padding: 0 .25em;
      margin-top: .5em;
      border: none;
      transition: background-color .3s ease-in-out;
      cursor: pointer;
   }
   .btn:hover {
     background-color: lightgreen;
   }
   .btn a {
     text-decoration: none;
     font-size: 1rem;
     text-transform: capitalize;
     color: black;
   }
      @media (min-width: 800px){
        article {
          width: 100%;
          display: grid;
          grid-template-columns: .3fr 1fr;
          align-items: center;
        }
      }
  }
`

export default ProductList