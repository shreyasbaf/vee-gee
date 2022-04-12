import styled from "styled-components";

export const Container = styled.div`
    
`;

export const HomeButton = styled.button`
  border:none;
  padding: 12px 24px;
  background: #d9915e;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  border-radius: 8px;
`;

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DisplayText = styled.h3`
    margin-top: 36px;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'IBM Plex Serif', serif, Times;
`;

export const CartImage = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 80px;
`;

export const FileUpload = styled.div`
  /* width: 100%;
  /* padding: 26px 0px 0px; */
  /* height: 26px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;  */

  .file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.file-input label {
  display: block;
  position: relative;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background: linear-gradient(40deg,#d9915e,#873e23);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform .2s ease-out;
}

.file-name {
  position: absolute;
  bottom: -35px;
  left: 10px;
  font-size: 0.85rem;
  color: #555;
}

input:hover + label,
input:focus + label {
  transform: scale(1.02);
}
`;