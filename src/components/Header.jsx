import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);

  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);
  return (
    <div>
         <Navbar expand='lg'className='bg-primary fixed-top'>
        <Container>
          <Navbar.Brand>
            <Link to={'/'}style={{textDecoration:'none',color:'white',fontSize:'30px',}}><i class="fa-solid fa-cart-shopping"></i>
            E-CART
            </Link></Navbar.Brand>
          < Navbar.Toggle ariya-controls='basic-navbar-nav'/>
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className='ms-auto'>
           <Nav.Link className='btn border rounded border-secondary'><Link to={'/wishList'}style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart me-2" ></i>WishList<Badge className='rounded ms-2'  bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
           <Nav.Link  className='btn border rounded border-secondary ms-3'><Link to={'/cart'}style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping me-2" ></i>Cart<Badge className='rounded ms-2' bg="secondary">{cart.length}</Badge></Link></Nav.Link>
           </Nav>
           </Navbar.Collapse>  
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header