import React from 'react'
import Products from '../components/Products';
import Switcher from '../components/Switcher';
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <div className='mini-nav'>
        <h1>Home</h1>
        <Switcher />
      </div>
       <Products />
    </Wrapper>
   
  )
}

const Wrapper = styled.div`
    width: 1100px;
    max-width: 100%;
    margin: 3em auto 0;
    padding: 0 1em;

    .mini-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
`
export default Home