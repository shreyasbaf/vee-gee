import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Modals/styles';
import { InputWrapper } from '../../components/Modals/SuccessModal'
import { BASEURL } from '../../redux/user/userTypes';
import {  Heading } from '../Product';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleLogin = () =>{
    const data={
      name:name,
      password:password
    }
    axios.post(`${BASEURL}/vee-gee-signup`, data)
    .then((res) => {
      if(res.data == 'Success'){
        setName('');
        setPassword('')
        localStorage.setItem('adminLoggedIn', true);
        setTimeout(() => {
          localStorage.removeItem('adminLoggedIn');
        }, 2000 * 60 * 60);
        history.push('/')
      }
      else{
        localStorage.removeItem('adminLoggedIn');
        alert('Try Again')
      }
    })
    .catch((err) => console.log(err))

  }
    return (
        <div style={{marginTop:'80px', padding:'24px'}}>
            <Heading>Sign Up Screen</Heading>
          <InputWrapper label='First Name' placeholder='First Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
          <InputWrapper label='Last Name' placeholder='Last Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
          <InputWrapper label='Email' placeholder='Email' value={name} onChange={(e) =>{setName(e.target.value)}} />
          <InputWrapper label='Passowrd' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <InputWrapper label='Confirm Passowrd' placeholder='Confirm Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <Button onClick={() => handleLogin() }>Sign Up</Button>
        </div>
    )
}

export default Signup
