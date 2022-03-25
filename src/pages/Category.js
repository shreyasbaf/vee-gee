import axios from 'axios';
import React from 'react'
import { Container5, FourColumns, Img22, Text8, Text9, ThreeColumns } from './LandingPageStyles';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { Button, Description, DetailsContainer, Heading, Image, Price, Wrapper } from './Product';

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
    const [loading,setLoading] = React.useState(true)
    const [items,setItems] = React.useState([])
    const [handleAction, setHandleAction] = React.useState(false)
    const addToCart = (PID) =>{
        console.log(PID)
        const token = localStorage.getItem('token')
        let data = { token: token, id:PID }
        try{
            axios.post('https://veegee-backend-demo.herokuapp.com/addItemToCart', data)
            .then(response =>{
              console.log(response)
              notify();
              setHandleAction(false)
            })
            .catch(error =>{
                console.log('ERROR',error)
            })
            console.log(loading)
        }
        catch(err){
            console.log(err);
        }
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
            loading ? 
            <div style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>
                <RotatingLines width="80" strokeColor="#FF5733" strokeWidth="1" />
            </div>
            :
            items.length ?
            <ThreeColumns>
            { items.map((item) =>(
                            <Wrapper>
                            <Image src={item?.image_link} />
                            <DetailsContainer>
                            <Heading>
                                {item?.name}
                            </Heading>
                            <Description>
                                {item?.description}
                            </Description>
                            <Price>
                            <span>{item?.mrp}</span> &nbsp; {item?.price} <p className='discount'> &nbsp; &nbsp; {Math.round(((item.mrp - item.price)/ item.mrp )* 100)}% </p>
                            </Price>
                            <Button onClick={() => {addToCart(item.id); setHandleAction(true);}}>
                                {handleAction ? <RotatingLines width="30" strokeColor="#ffffff" strokeWidth="3" /> : 'Add to Cart' }
                            </Button>
                            </DetailsContainer>
                            </Wrapper>
        ))}
        </ThreeColumns>
            : <h3 style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>No Data To Display</h3>
            }
            <div style={{marginBottom:'50px'}}>

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
marginBottom={150}
/>
            </div>
    </>
    )
}
export default Category
