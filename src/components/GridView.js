import React from 'react'
import { useGlobalContext } from '../context';
import styled from 'styled-components'
import Loading from './Loading';
import ProductGrid from './ProductGrid';

const GridView = () => {
  const {loading, products} = useGlobalContext()
 

  if(loading){
    return <Loading />
  }
  return (
    <Wrapper>
        {products.map((item) => {
          return <ProductGrid  key={item.id} {...item}/>
        })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1100px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 20px;
  column-gap: 20px;
`

export default GridView