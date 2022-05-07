import React from 'react'
import { useHistory } from "react-router-dom";

import styled from 'styled-components';
    export const Wrapper = styled.div`
        padding: 2%;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        margin: 8px;
        @media (max-width: 850px){
            margin-top: 80px;
            flex-direction: column;
        }
        img{
            height: auto;
            width: 90%;
            justify-content: center;
        }
    `;
    export const Image =styled.img`
        height: auto;
        width: 50%;
        border-radius: 5px;
        @media (max-width: 850px){
            width: 80%;
            justify-content: center;
        }
    `;

    export const Heading = styled.h3`
        color: #a38c7f;
        @media (max-width: 850px){
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    `;
    export const Description = styled.p`
        color: #a38c7f;
        @media (max-width: 850px){
            text-align:center;
        }
    `;
    export const Button = styled.button`
        background: #d9915e;
        /* background: #c2a18d; */
        border: none;
        padding: 16px;
        border-radius: 8px;
    `;
const NotFound = () => {
    const history = useHistory()
    return (
            <Wrapper>
                <img src='https://freefrontend.com/assets/img/html-funny-404-pages/GSAP-SVG-Animation-404-Error-Milk-Carton.gif' />
                <Button onClick={() => history.push('/')} style={{marginTop:'24px'}}> Go Home</Button>
            </Wrapper>
    )
}
export default NotFound
