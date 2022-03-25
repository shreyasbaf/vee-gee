import axios from 'axios';
import React, { useState } from 'react'
import { Container5, FourColumns, Img22, Text8, Text9 } from './LandingPageStyles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import cart from '../assets/images/shoppingCart1.svg'

const Cart = () => {
  const history = useHistory()
    // let location = window.location.href;
    // let locationArr = location.split('/');
    // let id = locationArr[locationArr.length - 1];
    const notify = () => toast('🦄 Item Removed to Cart!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const [handleAction, setHandleAction] = React.useState(false)
    const [loading,setLoading] = React.useState(false)
    const [items,setItems] = React.useState([])
    const [total, setTotal] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(true)
    let cartItems = [];

    const handleCart = () =>{
      let cartItems = [];
      items.forEach(item => {
        cartItems.push(item.name);
      });
      console.log(cartItems);
      window.location.href ='http://wa.me/919586996997?text='+  cartItems
      // history.push('http://wa.me/919586996997/?text='+  cartItems)
    }
    const removeFromCart = (PID) =>{
        console.log(PID)
        const token = localStorage.getItem('token')
        console.log(PID)
        let data = { token: token, id:PID }
        try{
            axios.post('https://veegee-backend-demo.herokuapp.com/removeItemFromCart', data)
            .then(response =>{
              console.log(response);
              getData();
              notify();
              setHandleAction(false)
            })
            .catch(error =>{
                console.log('ERROR',error)
            })
          }
          catch(err){
            console.log(err);
          }
    }
    const getData = () =>{
      const token = localStorage.getItem('token')
      const data = { token : token };
      try{
        setLoading(true)
        axios.post('https://veegee-backend-demo.herokuapp.com/getCartItems', data)
        .then(response =>{
          console.log(response)
            var resData = response?.data?.result
            setItems(resData)
            setTotal(response?.data?.total)
            setLoading(false)
            setIsCartEmpty(false)
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
      }
      catch(err){
        console.log(err);
      }
    }

    React.useEffect(() => {
        setLoading(true)
        getData();
        setLoading(false)
    },[])
    return (
        <>
        {
            isCartEmpty ?
            <div style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>
              <RotatingLines width="80" strokeColor="#FF5733" strokeWidth="1" />
            </div>
            :
            items && items.length ?
            <>
            <FourColumns>
            { 
            items.map((item) =>(
                    <Container5>
                    <Img22 src={item.image_link} />
                    <div>
                        <Text9 style={{textDecoration:'none', color:'black'}}>{item.name}</Text9>
                        <Text9> Rs. {item?.price}</Text9>
                        <Text8>{item?.description}</Text8>
                    </div>
                    <button style={{border:'none', padding:'12px', background:'beige'}} onClick={() => {removeFromCart(item.id); setHandleAction(true);}}> {handleAction ? <RotatingLines width="20" strokeColor="#FF5733" strokeWidth="1" /> : 'Remove From Cart' }</button>
                    </Container5>
        ))}
        </FourColumns>
        <Container5>

       <h3 style={{textAlign:'center', justifyContent:'center', alignItems:'center', display:'flex'}} >Total : {total}</h3>
       <button style={{border:'none', padding:'12px', background:'lightGreen',justifyContent:'center', alignItems:'center', display:'flex', textAlign:'center'}} onClick={ () => {handleCart()}} >Order on Whatsapp</button>
        </Container5>
        </>
            :
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <img style={{width:'200px', height:'200px', marginTop:'80px'}} src={cart} />
              <h3 style={{textAlign:'center', marginTop:'36px', justifyContent:'center', alignItems:'center', display:'flex', fontFamily: 'IBM Plex Serif'}}>Shopping Cart is Empty</h3>
       <button style={{border:'none', padding:'12px 24px', background:'#d9915e',justifyContent:'center', alignItems:'center', display:'flex', textAlign:'center', borderRadius:'8px'}} onClick={ () => history.push('/')} >Home</button>

            </div> 
            }
            <ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </>
    )
}
export default Cart
