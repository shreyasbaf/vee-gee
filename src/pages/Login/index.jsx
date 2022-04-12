import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Modals/styles';
import { InputWrapper } from '../../components/Modals/SuccessModal'
import {  Heading } from '../Product';
import { fetchUsers, loginUser } from '../../redux';
import { connect } from 'react-redux';
import { BASEURL } from '../../redux/user/userTypes';
import { DisplayText, FlexBox, HomeButton } from '../styles';

const Login = ({ userData, fetchUsers }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  useEffect(() => {
    // fetchUsers()
    loginUser()
    // console.log(userData);
  }, [])
  const handleLogin = () =>{
    const data={
      name:name,
      password:password
    }
    if(name === 'Vimal@123balar' && password ==='Vimal@321balar'){
      localStorage.setItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z', true);
      localStorage.setItem('userLoggedIn', true);
      setName('');
      setPassword('')
      setTimeout(() => {
        localStorage.removeItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z');
        localStorage.removeItem('userLoggedIn');
      }, 2000 * 60 * 60);
      window.location.reload(false)
    }
    else{
    axios.post(`${BASEURL}/vee-gee-login`, data)
    .then((res) => {
      if(res.data == 'Success'){
        setName('');
        setPassword('')
        localStorage.setItem('userLoggedIn', true);
        setTimeout(() => {
          localStorage.removeItem('userLoggedIn');
        }, 2000 * 60 * 60);
          window.location.reload(false)
      }
      else{
        localStorage.removeItem('adminLoggedIn');
        alert('Try Again')
      }
    })
    .catch((err) => console.log(err))
  }
  
  }
    return (
        <div style={{marginTop:'80px', padding:'24px'}}>
          {
            !localStorage.getItem('userLoggedIn') ?
            <>
          <Heading>Login Screen</Heading>
          <InputWrapper label='Name' placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
          <InputWrapper label='Passowrd' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <Button onClick={() => handleLogin() }>Login</Button>
          </>
          :
          <FlexBox>
          <DisplayText>Logged In Successfully</DisplayText>
          <HomeButton onClick={ () => history.push('/')} >Home</HomeButton>
      </FlexBox>
          }
        </div>
    )
}

// export default Login

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch(loginUser()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)