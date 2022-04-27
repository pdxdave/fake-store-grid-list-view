import React from 'react'
import { useGlobalContext } from '../context';
import styled from 'styled-components'

const Switcher = () => {
    const {setGridView, setListView} = useGlobalContext()
  return (
    <Wrapper>
        <button onClick={setGridView} className="btn">Grid View</button>
        <button onClick={setListView} className="btn">List View</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .btn {
      font-family: inherit;
      font-size: 1.2rem;
      padding: 0 1em;
      margin-left: 1em;
      cursor: pointer;
      border: none;
      transition: background-color .3s ease-in-out;
    }
    .btn:hover {
      background-color: lightgreen;
    }
    @media (max-width: 500px){
      .btn {
        font-size: .8rem;
      }
    }
`
export default Switcher