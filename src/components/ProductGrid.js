import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ProductGrid = ({id, title, image}) => {
  return (
    <Wrapper>
      <div className='article-wrapper'>
        <img src={image} alt={id} />
        <div className="footer">
          <p>{title}</p>
        </div>
      </div>
      <button className='btn'>
          <Link to={`/product/${id}`}>more info</Link>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  border: 1px solid gray;
  border-radius: 4px;
 
  .article-wrapper {
    padding: 1em 1em 5em 1em;
  }
  img{
    width: 100%;
    height: 300px;
    object-fit: scale-down;
  }
  .footer p {
    text-align: center;
    color: black;
  }
  .btn {
    margin-top: 1em;
    width: 100%;
    font-family: inherit;
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
    border: none;
    padding: .5em 0;
    border-radius: inherit;

    a{
      text-decoration: none;
      text-transform: capitalize;
    }
  }
`
export default ProductGrid