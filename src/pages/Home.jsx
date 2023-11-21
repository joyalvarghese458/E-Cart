import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()
  return (
    <div>
      <Row className='m-5'>
       {data?.length>0?
       data.map((item)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{item.title.slice(0,15)}...</Card.Title>
        <Card.Text>
        {item.description.slice(0,40)}...
        </Card.Text>
        <Card.Text><p>Price : $ {item.price}</p>
        
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger btn rounded"><i class='fa-solid fa-heart'></i></Button>
          <Button onClick={()=>dispatch(addToCart(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-cart-shopping"></i></Button>
          </div>
      </Card.Body>
    </Card>
        </Col>)):<p>Nothing to display</p>}
      </Row>
    </div>
  )
}

export default Home