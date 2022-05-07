import React from 'react'
import styled from 'styled-components';
import { FlexBox } from './styles';
import logo from '../assets/images/logo.png'
const Footer = () => {

  const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
  justify-content:${(props) => props.justifyContent ? props.justifyContent : 'center'};
  align-items :${(props) => props.alignItems ? props.alignItems : 'center'};
  flex-flow : row wrap;
`;
    return (
      <Flex justifyContent='space-evenly'>
        <img src={logo} style={{height:'30px', width:'100px'}} alt='logo'/>
        <Flex>
          <h4>F</h4>
          <h4>T</h4>
          <h4>I</h4>
        </Flex>
        {/* <div>
          <h6>
          </h6>
        </div> */}
      </Flex>
    )
}

export default Footer
