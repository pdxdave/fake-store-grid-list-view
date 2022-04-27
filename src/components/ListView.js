import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import Loading from './Loading'
import ProductList from './ProductList'

const ListView = () => {
  const {loading, products} = useGlobalContext()

  if(loading){
    return <Loading />
  }
  return (
    <Wrapper>
      {products.map((item) => {
        return <ProductList key={item.id} {...item}/>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1100px;
  max-width: 100%;
`

export default ListView