import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { BigMobile, tablet } from '../responsive';
const CategoriesItem = ({item}) => {
  return (
    <Container>
    <Link to={`/products/${item.cat}`}>
    <Image src={item?.img} />
    <Info>
      <Title>{item?.title}</Title>
      <Button>SHOP NOW</Button>
    </Info>
      </Link>
  </Container>
  )
}
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    ${tablet({fontSize:"18px"})}
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    ${tablet({fontSize:"15px",
    padding:'6px'
  })}

`;

export default CategoriesItem