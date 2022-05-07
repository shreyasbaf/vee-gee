import React from 'react'
import styled from 'styled-components';
import { FlexBox } from './styles';
import logo from '../assets/images/logo.png'
import insta from '../assets/images/insta.svg'
import fb from '../assets/images/fb.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Footer = () => {

  const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
  justify-content:${(props) => props.justifyContent ? props.justifyContent : 'center'};
  align-items :${(props) => props.alignItems ? props.alignItems : 'center'};
  flex-flow : row wrap;
`;
    return (
      <div style={{margin:'24px'}}>
      <Flex justifyContent='center'>
        <img src={insta} style={{height:'30px', width:'100px'}} alt='logo'/>
        <img src={fb} style={{height:'30px', width:'100px'}} alt='logo'/>
        <img src={whatsapp} style={{height:'30px', width:'100px'}} alt='logo'/>
        {/* <div>
          <h6>
          </h6>
        </div> */}
      </Flex>
        </div>
    )
}

export default Footer
