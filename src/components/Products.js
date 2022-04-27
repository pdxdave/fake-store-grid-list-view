import React from 'react'
import { useGlobalContext } from '../context'
import GridView from './GridView';
import ListView from './ListView'

const ProductList = () => {
  const {toggleGrid} = useGlobalContext()

  if(toggleGrid === true){
    return <GridView />
  }
  return (
    <ListView />
  )
}

export default ProductList