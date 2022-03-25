import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import TabGroup from '../components/TabGroup';
import { Container2, Container5, FourColumns, Image2, Img22, Sect2, Text1, Text6, Text7, Text8, Text9 } from './LandingPageStyles';

export const LandingPage = () => {
    const [loading,setLoading] = React.useState(false)
    const [category,setCategory] = React.useState([])
    React.useEffect(() => {
      if(!localStorage.getItem('token')){
        let token = Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
        localStorage.setItem('token',token)
      }
        setLoading(true)
        axios.get(`https://veegee-backend-demo.herokuapp.com/getCategories`)
        .then(response =>{
            var resData = response.data
            setCategory(resData)
            setLoading(false)
            // console.log(category[2])
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
    },[])
    return (
        <>
        <Sect2>
        <Container2>
          <Text1>VeeGee Bakers Village</Text1>
          <Text6>The Baking Begins From Here</Text6>
          <Text7>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Ever
            since our humble beginnings, we made sure to put our customers at the center of everything we do.
          </Text7>
          <Image2 src='https://www.veegeebakersvillage.com/assets/images/logo/logo.PNG' />
          <FourColumns>
        {
        category.length ?
        category.map((category) =>(
          <Link to={'/category/'+ category.category_id} style={{textDecoration:'none', color:'black'}}>
                        <Container5>
                        <Img22 src={category.image} />
                        <div>
                          <Text9 style={{textDecoration:'none', color:'black'}}>{category.category_name}</Text9>
                          {/* <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8> */}
                        </div>
                      </Container5>
          </Link>
    ))
        : <h3 style={{textAlign:'center'}}>Loading</h3>
        }
          </FourColumns>
        </Container2>
        <TabGroup />
      </Sect2>
      </>
    )
}

{/* <Container5>
<Img22 src={category.image} />
<div>
  <Text9>{category.category_name}</Text9>
  <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8>
</div>
</Container5> */}