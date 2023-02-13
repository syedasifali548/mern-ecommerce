import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import classes from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/apiCalls';

const Navbarr = () => {
   const navigate = useNavigate()
   const quantity = useSelector(state=>state.cart.quantity)
   const {user} = useSelector((state)=>state.user)
   const dispatch = useDispatch()

   const onLogout=()=>{
    dispatch(logout())
    navigate('/')
   }

  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Link to='/'
      style={{color:"#000",textDecoration:"none"}}
      >
      <Navbar.Brand
      >E-SHOP</Navbar.Brand>
      </Link>
  
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <div className={classes.navbarRight}>
        <input type='search' placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 26 }} 
            className={classes.searchIcon}
            />
        </div>
        <Nav
        className={`my-2 my-lg-0 ${classes.navbar}`}
         navbarScroll >
          <Link style={{color:"#000",textDecoration:"none"}} to="/register">REGISTER</Link>
          <Link style={{color:"#000",textDecoration:"none"}} to="/login">SIGN IN</Link>
          <button style={{color:"#000",textDecoration:"none"}}
          onClick={onLogout}
          >LOGOUT</button>
            <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
        
         
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr