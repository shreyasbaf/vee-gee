import React from 'react'
import styled from 'styled-components';
    export const Wrapper = styled.div`
        padding: 2%;
        display: flex;

        background-color: #faf4f0;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        margin: 8px;
        @media (max-width: 850px){
            flex-direction: column;
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
    export const DetailsContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 12px;
        @media (max-width: 850px){
            justify-content: center;
            align-items: center;
        }
    `;
    export const Heading = styled.h3`
        color: #a38c7f;
        @media (max-width: 850px){
            justify-content: center;
            align-items: center;
        }
    `;
    export const Description = styled.p`
        color: #a38c7f;
        @media (max-width: 850px){
            text-align:center;
        }
    `;
    export const Price = styled.p`
        font-size: 16px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        span{
            color: gray;
            text-decoration: line-through;
        }
        .discount{
            display: inline;
            color: green;
        }
    `;

    export const Button = styled.button`
        background: #d9915e;
        /* background: #c2a18d; */
        border: none;
        padding: 16px;
        border-radius: 8px;
    `;
const Product = () => {

    return (
            <Wrapper>
            <Image src='https://veegeebakersvillage.com/images/category/BakingIngredients1202F87A-32CE-4ED9-BD36-B4C779D5F9EF.jpeg' />
            <DetailsContainer>
            <Heading>
                Shreyas Bafna
            </Heading>
            <Description>
                I am a Software Engineer with 3+ years of experience in the field
            </Description>
            <Price>
            <span>1233</span> &nbsp; 1233
            </Price>
            <Button>
                Add to Cart
            </Button>
            </DetailsContainer>
            </Wrapper>
    )
}
export default Product
