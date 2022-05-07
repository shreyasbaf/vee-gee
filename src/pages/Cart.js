import axios from 'axios';
import React, { useState } from 'react'
import { CartImg, Container5, FourColumns, Img22, Text8, Text9 } from './LandingPageStyles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import cart from '../assets/images/shoppingCart1.svg'
import { CartContainer, CartImage, DisplayText, FlexBox, HomeButton } from './styles';
import { BASEURL } from '../redux/user/userTypes';
import close from '../assets/images/close.svg';

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
    const [handleAction, setHandleAction] = React.useState('')
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
              setHandleAction('');
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
             handleAction !== item.id ?
              <CartContainer>
                    <CartImg src={item.image} />
                    <div style={{margin:'24px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Text9 style={{textDecoration:'none', color:'black'}}>{item.name}</Text9>
                        <Text9> Rs. {item?.price}</Text9>
                        {/* <Text8>{item?.description}</Text8> */}
                    </div>
                    <img src={close} style={{ marginTop:'-96px', marginRight:'8px', cursor:'pointer'}} onClick={() => {removeFromCart(item.id); setHandleAction(item.id); }}/>
                    {/* <button style={{border:'none',height:'8px', padding:'12px', background:'url("https://products.ls.graphics/mesh-gradients/images/44.-Green-Yellow_1.jpg")', borderRadius:'50px', cursor:'pointer'}} onClick={() => {removeFromCart(item.id); setHandleAction(true);}}> {handleAction ? <RotatingLines width="20" strokeColor="#FF5733" strokeWidth="1" /> : 'R' }</button> */}
                   </CartContainer>
                   :
            <div style={{textAlign:'center', marginTop:'20px', justifyContent:'center', alignItems:'center', display:'flex'}}>
            <RotatingLines width="60" strokeColor="#FF5733" strokeWidth="2" />
          </div>
        ))}
        </FourColumns>
        <Container5>
          <DisplayText>Total : {total}</DisplayText>
          <button style={{border:'none', cursor:'pointer', padding:'12px 24px', background:'lightGreen',justifyContent:'center', alignItems:'center', display:'flex', textAlign:'center', borderRadius:'50px'}} onClick={ () => {handleCart()}} >Order on Whatsapp</button>
        </Container5>
        <CartContainer>

        </CartContainer>
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
