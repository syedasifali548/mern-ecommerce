import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import { BigMobile } from '../responsive'
import CategoriesItem from './CategoriesItem'
const Categories = () => {
  return (
    <Container>
         {categories?.map((item)=>(
            (<CategoriesItem item={item} />)
         ))}
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${BigMobile({flexDirection:"column"})}

`;
export default Categories