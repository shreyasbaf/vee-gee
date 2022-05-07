import axios from 'axios';
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import TabGroup from '../components/TabGroup';
import { Container2, Container5, FourColumns, FourColumnsResponsive, Image2, Img22, Sect2, Text1, Text6, Text7, Text8, Text9 } from './LandingPageStyles';
import logo from '../assets/images/logo.png'
import { BASEURL } from '../redux/user/userTypes';
import whatsapp from '../assets/images/whatsapp.svg'
import { RotatingLines } from 'react-loader-spinner';
import Footer from './Footer';
export const LandingPage = () => {
    const [loading,setLoading] = React.useState(false)
    const [category,setCategory] = React.useState([])
    React.useEffect(() => {
      try{
      if(!localStorage.getItem('token')){
        let token = Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
        localStorage.setItem('token',token)
      }
        setLoading(true)
        // axios.get(`https://veegee-backend-demo.herokuapp.com/getCategories`)
        axios.get(`${BASEURL}/getCategories`)
        .then(response =>{
            var resData = response.data
            setCategory(resData)
            setLoading(false)
            // console.log(category[2])
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
        <Sect2>
        <Container2>
          <Text1>The Baking Begins From Here</Text1>
          <Text6>VeeGee Bakers Village</Text6>
          {/* <Text7>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Ever
            since our humble beginnings, we made sure to put our customers at the center of everything we do.
          </Text7> */}
          <Image2 src={logo} />
          <Text6 style={{marginTop:'12px'}}>Browse By Category</Text6>
          <Text8>Unforgettable Sweetness You’ll Keep Craving For.</Text8>
        {
          category.length ?
            <FourColumnsResponsive>
                {
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
            ))}
            </FourColumnsResponsive>
            : 
            <div style={{textAlign:'center', marginTop:'100px', justifyContent:'center', alignItems:'center', display:'flex'}}>
            <RotatingLines width="80" strokeColor="#FF5733" strokeWidth="1" />
          </div>
        }
          <div style={{marginTop:'24px'}}>  
          <Text6>About Us</Text6>
          <Text7>
          Bakers village by veegee - as our tagline suggests, this is where the baking begins. <br/>
We concentrate on meeting all of the needs of a dedicated baker. We are a one-stop shop for all bakery items, giving you easy access to a variety of interesting bakeware and edibles that meet your needs.
<br/>
Our product ranges from a variety of Baking tools , sprinkles and sparkles , Essence , cake decor items , chocolate and compounds , edibles and dyes, cutters and plungers , fondant and fillings , food / gel colours , moulds , nozzles and pipping bags , tins and pan , boxes ( cake, cupcake , brownies etc ) , premix ,much more that will be delivered to your door step.
<br/>
Yes! Baker's Village ships by veegee across the country to all postal codes in India.
<br/>
We encourage you to contact us if you have any specific needs, and we will do our best to meet them.

          </Text7>
          </div>
        </Container2>
        {/* <Text6>FAQs</Text6> */}
        {/* <TabGroup /> */}
      </Sect2>
        <a href='https://wa.me/919586996997'>
        <img src={whatsapp} style={{position: 'fixed',   bottom: '90px',   right: '30px',   zIndex: '9',  width:'48px',  height:'48px'}} />
        </a>
        <Footer/>
      </>
    )
}