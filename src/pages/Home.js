import axios from 'axios';
import React from 'react'
import { Container5, FourColumns, Img22, Text8, Text9 } from './LandingPageStyles';

const Home = () => {
    let location = window.location.href;
    let locationArr = location.split('/');
    console.log(locationArr[locationArr.length - 1]);
    let id = locationArr[locationArr.length - 1];
    const [loading,setLoading] = React.useState(false)
    const [items,setItems] = React.useState([])
    const addToCart = (PID) =>{
        console.log(PID)
        const token = localStorage.getItem('token')
        //handle addToCart here
    }
    React.useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token')
        const data = { token : token };
        axios.post('http://localhost:8080/getCartItems', data)
        .then(response =>{
            var resData = response.data
            setItems(resData)
            setLoading(false)
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
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
            : <h3 style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>Loading</h3>
            }
    </>
    )
}
export default Home
