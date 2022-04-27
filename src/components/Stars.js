import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({stars}) => {

const tempStars = Array.from({length: 5}, (_, index) => {
    const number = index + 0.5
    return (
        <span>
            {stars >= index + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar />}
        </span>
    )
})
  return (
      <Wrapper>
          {tempStars}
      </Wrapper>
  )
  
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.25em;
    span {
        color: #ffb900;
        font-size: 1rem;
        margin-right: 0.25rem;
    }
`
export default Stars