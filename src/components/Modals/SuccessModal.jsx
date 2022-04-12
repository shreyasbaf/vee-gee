import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components';
import { BASEURL } from '../../redux/user/userTypes';
import SharedInputField from '../SharedInputField'

import {
    ModalBody,
    ModalContent,
    Heading,
    Tagline,
    Button,  
  } from './styles'

  export const InputWrapper = styled.input`
  width: 90%;
  border: 2px solid #e6e8ec;
  border-radius: 2px;
  padding: 12px 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin: 12px 0;
  &::place-holder {
    font-size: 14px;
    color: #b1b5c3;
    font-family: Inter;
  }
`;
export const SuccessModal = (props) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () =>{
    const data={
      name:name,
      password:password
    }
    axios.post(`${BASEURL}/vee-gee-login`, data)
    .then((res) => {
      if(res.data == 'Success'){
        props.Close();
        setName('');
        setPassword('')
        localStorage.setItem('adminLoggedIn', true);
        setTimeout(() => {
          localStorage.removeItem('adminLoggedIn');
        }, 2000 * 60 * 60);
      }
      else{
        localStorage.removeItem('adminLoggedIn');
        alert('Try Again')
      }
    })
    .catch((err) => console.log(err))

  }
  return (
    <div>
      <ModalBody show={props.show}>
        <ModalContent>
        <Heading>{props.heading}</Heading>
          <InputWrapper label='Name' placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
          <InputWrapper label='Passowrd' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <Button onClick={() => handleLogin() }>Login</Button>
        </ModalContent>
      </ModalBody>
    </div>
  )
}