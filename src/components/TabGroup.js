import React, { useState } from 'react';
import styled from 'styled-components';
import AddCategory from '../pages/Admin/AddCategory';
import RemoveCategory from '../pages/Admin/RemoveCategory';
// import Accord from './Accord';

const Tab = styled.button`
margin-bottom: 0;
display: flex;
justify-content: left;
align-items: flex-start;
flex-direction: column;
  font-size: 14px;
  padding: 12px 28px 8px 0px;
  @media only screen and (max-width: 600px) {
    padding: 10px 5px;
    font-size: 8px;
  }
  cursor: pointer;
  opacity: 0.4;
  background: white;
  border: 0;
  outline: 0;
  text-align: left;
  ${({ active }) =>
    active &&
    `opacity: 1;
    color:black;
  `}
  z-index:1;
  font-weight: 600;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  div{
      display: flex;
      flex-direction: column;
      margin: 0;
      padding:0;
  }
`;

const Heading = styled.h1`
    font-weight: 800;
    font-size: 48px;
    line-height: 45px;
    margin:0;
    padding-bottom: 40px;
    @media only screen and (max-width: 600px) {
    line-height: 18px;
    font-size: 16px;
    padding-bottom: 20px;
  }
`;

const Heading1 = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 44px;
    color: #C61975;
    padding-bottom: 10px;
    /* @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;    
  } */
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: 150px;
`;

const QuestButton = styled.button`
    margin-top:72px;
    background: linear-gradient(90deg, #B91372 0%, #6B0F1A 100%);
    box-shadow: 0px 12px 32px rgba(235, 39, 38, 0.2);
    border-radius: 2px;
    width: 187px;
    height: 48px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    border: 0;
`;

const Hr = styled.hr`
    overflow: hidden;
    display: none;
    margin: 0%;;
    ${({ active }) => active && `display: block;`}
    width: 50px;
    border-bottom: 1px solid #A91F2E;
`;

let types = ['Marketplace', 'Getting Started', 'Buying & Selling', 'Verification'];
export function TabGroup(props) {
  const [active, setActive] = useState(types[0]);
  types = props.types || types
  return (
    <Container>
    {/* <Heading1>GET YOUR ANSWERS</Heading1> */}
    {/* <Heading>Frequently Asked Questions</Heading> */}
      <TabBar>
        {types.map(type => (
            <div>
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type.toUpperCase()}
          </Tab>
            <Hr  active = {active === type}/>
            </div>
        ))}
      </TabBar>
      <p />
      {
        active == 'Add Category'?
        <>
        <AddCategory />
        </>
        : ''
      }
      {
        active == 'Add Product'?
        <>
        Add Product
        </>
        : ''
      }
            {
        active == 'Delete Category'?
        <>
        <RemoveCategory />
        </>
        : ''
      }
      {
        active == 'Delete Product'?
        <>
        Remove Product
        </>
        : ''
      }
    </Container>
  );
}

export default TabGroup