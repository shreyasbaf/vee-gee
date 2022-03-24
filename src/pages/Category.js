import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { Container5, FourColumns, Img22, Text9 } from './LandingPageStyles';

const Category = () => {
    let location = window.location.href;
    let locationArr = location.split('/');
    console.log(locationArr[locationArr.length - 1]);
    let id = locationArr[locationArr.length - 1];
    const [loading,setLoading] = React.useState(false)
    const [items,setItems] = React.useState([])
    React.useEffect(() => {
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
    },[])
    return (
        <FourColumns>
        {
            items.length ?
            items.map((item) =>(
                            <Container5>
                            <Img22 src={item.image_link} />
                            <div>
                              <Text9 style={{textDecoration:'none', color:'black'}}>{item.name}</Text9>
                              {/* <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8> */}
                            </div>
                          </Container5>
        ))
            : <h3 style={{textAlign:'center'}}>Loading</h3>
            }
    </FourColumns>
    )
}

export default Category
