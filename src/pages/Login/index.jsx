import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Modals/styles';
import { InputWrapper } from '../../components/Modals/SuccessModal'
import {  Heading } from '../Product';
import { fetchUsers, loginUser } from '../../redux';
import { connect } from 'react-redux';
import { BASEURL } from '../../redux/user/userTypes';

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
      setName('');
      setPassword('')
      setTimeout(() => {
        localStorage.removeItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z');
      }, 2000 * 60 * 60);
    // let id = locationArr[locationArr.length - 1];
    let location = window.location.href;
    let locationArr = location.split('/');
    if(locationArr[3] === 'login'){
    window.location.reload(false)
    }
    else{
      history.push('/')
    }
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
        let location = window.location.href;
        let locationArr = location.split('/');
        if(locationArr[3] === 'login'){
          history.push('/')
        }
        else{
          window.location.reload(false)
        }
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
          <Heading>Login Screen</Heading>
          <InputWrapper label='Name' placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
          <InputWrapper label='Passowrd' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <Button onClick={() => handleLogin() }>Login</Button>
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