import styled from "styled-components";

export const ModalBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(15, 16, 23, 0.9);
`;

export const SearchModalBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(15, 16, 23, 0.9);
`;

export const TimeSlotModalBody = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(15, 16, 23, 0.9);
`;

export const ModalContent = styled.div`
  padding: 20px;
  background-color: white;
  display: inline-block;
  border-radius: 8px;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  overflow: visible;
  width: 420px;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  // overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 80%;
  @media (min-width: 426px) {
    width: 450px;
  }
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #8499ae;
    margin: 0;
    @media (min-width: 300px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const ModelHead = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    color: #8499ae;
    margin: 0;
    @media (min-width: 300px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const Close = styled.img`
  cursor: pointer;
  width: 20px;
  :hover {
    width: 25px;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
`;

export const SubmitButton = styled.button`
  background: #827ffe;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;
export const SubmitButtonIcon = styled.i`
  margin-left: 10px;
  font-size: 12px;
`;

export const Icons = styled.i`
  position: absolute;
  margin-top: 17px;
  left: 35px;
  color: #9a99aa;
`;

export const Heading = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Regular;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  align-items: center;
  letter-spacing: -0.01em;
  color: #23262F;
  padding: 12px 36px;
  
`;

export const Tagline = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #777E90;
  padding: 16px 36px;
  a{
  color: #777E90;
  }
`;

export const Label = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #777E90;
    text-align: left;
    margin-top: 8px;
    margin-bottom: 12px;
    margin: 12px 0 12px 36px;
    @media (max-width: 600px){
        justify-content: center;
        align-items: center;
        margin: 8px 0 12px 0;
    }
`;

export const Input = styled.input`
    border: 2px solid #E6E8EC;
    box-sizing: border-box;
    border-radius: 2px;
    width: 348px;
    padding: 12px;
    margin: 0 36px;
    margin-bottom: 8px;

    ::placeholder{
        font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
color: #B1B5C3;
    }
    @media (max-width: 600px){
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        margin-bottom: 12px;
    }
`;

export const LongInput = styled.textarea`
  resize: none;
    border: 2px solid #E6E8EC;
    box-sizing: border-box;
    border-radius: 2px;
    width: 348px;
    height: 140px;
    padding: 12px;
    margin: 0 36px;
    margin-bottom: 24px;
    @media (max-width: 600px){
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
    }
    ::placeholder{
        font-family: Inter;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: start;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
        color: #B1B5C3;
    }
`;


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #a91f2e; */
  background: linear-gradient(40deg,#d9915e,#873e23);
  border-radius: 2px;
  border: 0;
  color: white;
  text-transform: uppercase;
  font-style: normal;
  font-family: Regular;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  /* width: 348px; */
  height: 48px;
  margin: 24px 36px ;
  padding: 16px;
  cursor: pointer;
  border-radius: 12px;
  @media (max-width: 600px){
    display: flex;
        justify-content: center;
        align-items: center;
        /* width: 100%; */
        margin: 0;
        margin-top: 24px;
    }
`;

export const BackButton = styled.img`
    position: absolute;
    right: 20px;
    top: auto;
`;
