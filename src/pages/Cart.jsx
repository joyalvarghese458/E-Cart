import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()

  const [total,setTotal] = useState(0)
  const navigate = useNavigate()

  const getTotal = ()=>{
   if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
   }else{
    setTotal(0)
   }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    alert('Thank You....Your Order is Succesfully Placed')
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  return (
    <div style={{marginTop:'150px'}}>
      { cartArray?.length>0?
        <div className='row w-100'>
          
          <div className='col-lg-6 m-5'>
             <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
    
              </thead>
              <tbody>
               { cartArray.map((item,index)=>(<tr>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td><img style={{height:"100px",width:'100px'}} src={item.thumbnail} alt="" /></td>
                  <td>{item.price}</td>
                  <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant='outline-danger btn rounded'><i class='fa-solid fa-trash'></i></Button></td>
    
                </tr>))
               }
              </tbody>
             </table>
           </div>
           <div className="col-lg-4 mt-5">
           <div className=' border shadow p-2'>
              <h2 className='text-danger'> Cart Summary</h2>
              <h4>Total No. Of Products : <span className='text-white fw-bolder fs-3 ms-1'>{cartArray.length}</span> </h4>
              <h4>Total Price: ${total}</h4>
             <Button onClick={checkout} variant='outline-danger btn rounded'>checkout</Button>
           </div>


           </div>

           </div>
           :
                 <div style={{ height: '100vh' }} className='d-flex align-items-center flex-column justify-content-center'>
                 <img height={'300px'} src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
                 <h4 className='mt-3'>Your Cart List Is Empty</h4>
                 <Link to={'/'}>Back To Home</Link>
               </div>
           }
        
    </div>
  )
}

export default Cart