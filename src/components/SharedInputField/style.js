import styled from 'styled-components';

export const InputLabel = styled.label`
display: block;
  font-weight: 600;
  font-size: 12px;
  font-family: Inter;
  text-transform: uppercase;
  color: #777e90;
`;
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
export const StyledInputWrapper = styled.div`
  margin-bottom: 20px;
`;
// 28px h1
// 28 , 14, 12 , 22
