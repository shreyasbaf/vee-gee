import React, { useState } from 'react';
import styled from 'styled-components';
// import expand from '../../../../../../assets/image/landing-page/ArrowDownRed.svg';

const AccordionWrapper = styled.div<{ open?: boolean }>`
  cursor: pointer;
  height: auto;
  padding: 8px 25px;
  margin: 5px;
  transition: all 0.4s ease-in-out;
  background-color: ${({ open }) => (open ? '#E5E5E533' : '#FFFFFF')};
  box-shadow: 0px 24px 24px -48px rgba(31, 47, 70, 0.12);
  border: 1px solid #e6e8ec;
  box-sizing: border-box;
  border-radius: 7px;
  width: 717px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    padding: 12px;
  }
`;

const InternalWrapper = styled.div<{ open?: boolean }>`
  width: 100%;
  height: ${({ open }) => (open ? '100%' : '1px')};
  transition: all 0.3s linear;
  overflow: hidden;
  .accord {
    color: ${colors.black};
    font-family: Regular;
    width: 85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 0 auto;
  }
`;

const Question = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;

  div {
    font-family: Regular;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    color: #23262f;
    vertical-align: center;
  }
`;

const Arrow = styled.div<{ open?: boolean }>`
  img {
    height: 12px;
    width: 12px;
    margin: 12px;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: all 0.3s linear;
    @media only screen and (max-width: 600px) {
      margin: 4px;
    }
  }
`;

const Accord = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AccordionWrapper
      open={open}
      // onMouseLeave={() => {
      //   setOpen(!open);
      // }}
      // onMouseEnter={() => {
      //   setOpen(!open);
      // }}
      onClick={handleClick}>
      <Question>
        <Arrow open={open}>
          <img src='' />
        </Arrow>
        <div>{props.name ? props.name : ''}</div>
        <Arrow open={open}>
          <img src='' />
        </Arrow>
      </Question>
      <InternalWrapper open={open}>
        <p className="accord"> {props.message} </p>
      </InternalWrapper>
    </AccordionWrapper>
  );
};
export default Accord;
