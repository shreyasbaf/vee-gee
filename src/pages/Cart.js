import axios from 'axios';
import React, { useState } from 'react'
import { Container5, FourColumns, Img22, Text8, Text9 } from './LandingPageStyles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import cart from '../assets/images/shoppingCart1.svg'
import { CartImage, DisplayText, FlexBox, HomeButton } from './styles';
import { BASEURL } from '../redux/user/userTypes';

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
            axios.post(`${BASEURL}/removeItemFromCart`, data)
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
        axios.post(`${BASEURL}/getCartItems`, data)
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
                    <Img22 src={item.image} />
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
          <DisplayText>Total : {total}</DisplayText>
          <button style={{border:'none', padding:'12px', background:'lightGreen',justifyContent:'center', alignItems:'center', display:'flex', textAlign:'center'}} onClick={ () => {handleCart()}} >Order on Whatsapp</button>
        </Container5>
        </>
            :
            <FlexBox>
                <CartImage src={cart} />
                <DisplayText>Your Shopping Cart is empty</DisplayText>
                <HomeButton onClick={ () => history.push('/')} >Home</HomeButton>
            </FlexBox>
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
