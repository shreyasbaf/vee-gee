import axios from 'axios';
import React, { useState } from 'react'
import { Container5, FourColumns, Img22, Text8, Text9 } from './LandingPageStyles';

const Home = () => {
    // let location = window.location.href;
    // let locationArr = location.split('/');
    // let id = locationArr[locationArr.length - 1];
    const [loading,setLoading] = React.useState(false)
    const [items,setItems] = React.useState([])
    const [total, setTotal] = useState(0);
    const addToCart = (PID) =>{
        console.log(PID)
        const token = localStorage.getItem('token')
        //handle addToCart here
    }
    
    React.useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token')
        const data = { token : token };
        axios.post('https://veegee-backend-demo.herokuapp.com/getCartItems', data)
        .then(response =>{
          console.log(response)
            var resData = response?.data?.result
            setItems(resData)
            setTotal(response?.data?.total)
            setLoading(false)
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
    },[])
    return (
        <>
        {
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
                    </Container5>
        ))}
        </FourColumns>
       <h3 style={{textAlign:'center', justifyContent:'center', alignItems:'center', display:'flex'}}>Total : {total}</h3>
        </>
            : <h3 style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>Loading</h3>
            }
    </>
    )
}
export default Home
