import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
      <h1>About</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Rerum a vitae quasi quo tempore perferendis! Mollitia 
        eveniet veniam obcaecati, odio tempora, ipsa quisquam 
        reprehenderit maxime aspernatur, nostrum reiciendis 
        necessitatibus harum dolor provident! Eveniet perspiciatis, 
        qui dolores deserunt quaerat explicabo odio?
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 1100px;
    max-width: 100%;
    margin: 3em auto 0;
    padding: 0 1em;



`
export default About