import React from 'react'
import styled from 'styled-components'
import { BigMobile } from '../responsive'

const Anouncement = () => {
    const Container = styled.div`
    height:30px;
    background-color: teal;
    color: white;
    display: flex ;
    align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${BigMobile({fontSize:"14px"})}

    `
  return (
    <Container>Super Deal! Free Shipping on Orders Over RS:500</Container>
  )
}

export default Anouncement