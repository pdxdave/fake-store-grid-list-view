import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-flex">
          <Link to="/" className="logo-link">
            <h2>Lo<span>go</span></h2>
          </Link>
          <div className="nav-wrapper">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>{/* end of nav-wrapper */}
      </div>{/* end of nav-flex */}
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  width: 100%;
  /* height: 5rem; */
  background-color: lightgray;
  

  .nav-flex {
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;

    width: 1100px;
    max-width: 100%;
    margin: 0 auto;

    .logo-link {
      text-decoration: none;
      color: black;

      span {
        color: red;
      }
    }
  }
  .nav-wrapper ul {
    display: flex;

    li {
      list-style: none;
      padding: 0 1em;
      a {
        text-decoration: none;
        font-size: 1.5rem;
        color: black;
      }
    }
  }
`