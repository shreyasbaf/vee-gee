import axios from 'axios';
import React from 'react'
import { Container5, FourColumns, Img22, Text8, Text9 } from './LandingPageStyles';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
    const notify = () => toast('🦄 Item Added to Cart!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    let location = window.location.href;
    let locationArr = location.split('/');
    console.log(locationArr[locationArr.length - 1]);
    let id = locationArr[locationArr.length - 1];
    const [loading,setLoading] = React.useState(false)
    const [items,setItems] = React.useState([])
    const addToCart = (PID) =>{
        console.log(PID)
        const token = localStorage.getItem('token')
        let data = { token: token, id:PID }
        try{
            axios.post('https://veegee-backend-demo.herokuapp.com/addItemToCart', data)
            .then(response =>{
              console.log(response)
              notify();
            })
            .catch(error =>{
                console.log('ERROR',error)
            })
          }
          catch(err){
            console.log(err);
          }
        //handle addToCart here
    }
    React.useEffect(() => {
        try{
        setLoading(true)
        axios.get(`https://veegee-backend-demo.herokuapp.com/getCategoryItems/`+id)
        .then(response =>{
            var resData = response.data
            setItems(resData)
            setLoading(false)
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
    }
    catch(err){
        console.log(err)
    }
    },[])
    return (
        <>
        {
            items.length ?
            <FourColumns>
            { items.map((item) =>(
                    <Container5>
                    <Img22 src={item.image_link} />
                    <div>
                        <Text9 style={{textDecoration:'none', color:'black'}}>{item.name}</Text9>
                        <Text9> Rs. {item?.price}</Text9>
                        <Text8>{item?.description}</Text8>
                    </div>
                    <button style={{border:'none', padding:'12px', background:'beige'}} onClick={() => {addToCart(item.id)}}>Add to cart</button>
                    </Container5>
        ))}
        </FourColumns>
            : <h3 style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>No Data To Display</h3>
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
export default Category
