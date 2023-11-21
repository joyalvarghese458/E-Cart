import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/card'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleWishList = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishList(item.id))
  }
  return (
    <div>
      <Row className='m-5' style={{ marginTop: '150px' }}>
        {wishlistArray?.length > 0 ?
          wishlistArray?.map((item) => (<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
              <Card.Body>
                <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                <Card.Text>
                  {item.description.slice(0, 40)}...
                </Card.Text>
                <Card.Text><p>Price : $ {item.price}</p>

                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                  <Button onClick={()=>dispatch(removeFromWishList(item.id))} variant="outline-danger btn rounded"><i class='fa-solid fa-trash'></i></Button>
                  <Button onClick={()=>handleWishList(item)} variant="outline-danger btn ronded"><i class="fa-solid fa-cart-shopping"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>))
          :
          <div style={{ height: '100vh' }} className='d-flex align-items-center flex-column justify-content-center'>
            <img height={'300px'} src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
            <h4 className='mt-3'>Your Wish List Is Empty</h4>
            <Link to={'/'}>Back To Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}


export default WishList