import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>sorry, the page you tried dosent exist.</h3>
        <Link to="/" className='btn'>back home</Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    font-size: 23px;
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
