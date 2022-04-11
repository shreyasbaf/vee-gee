import styled from 'styled-components';
import PreviewImage from '../../assets/images/logo.png';

export const Wrapper = styled.div`
  display: block;
  label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 12px;
    color: #777e90;
  }
`;
export const InputImageWrapper = styled.input`
  width: 100%;
  height: 182px;
  background-image: url(${({ background }) => background || PreviewImage});
  background-color: white;

  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  /* background-size: cover; */
  /* background-size: contain; */
  background-size: cover;
  color: transparent;
  border-radius: 16px;

  background-position: center;
  &::file-selector-button {
    display: none;
  }
  @media (max-width: 600px) {
    height: 262px;
  }
`;
