import React from 'react'
import styled from 'styled-components'
import TabGroup from '../components/TabGroup';

export const FourColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 600px) {
    grid-gap: 0px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 600px) {
    grid-gap: 51px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
  }
  `;

export const LandingPage = () => {

    const Container2 = styled.div`
    text-align: center;
    margin-top: 0px;
    margin: 80px 160px;
    @media (max-width: 1000px) {
    padding: 12px;
    text-align: center;
    width: 100%;
  }
  @media (max-width: 1200px) {
    padding: 70px 36px 0px;
    width: 100%;
  }
  @media (min-width: 1200px) {
    /* padding: 140px 160px 0px; */
  } 
  @media (max-width: 600px) {
    padding: 12px;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    padding: 12px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
    text-align: 'center';
  `;

  const Container5 = styled.div`
    display: flex;
    /* flex-direction: column; */
    text-align: left;
    margin-top: 76px;
  `;

  const Text1 = styled.div`
    text-transform: uppercase;
    font-family: Regular;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 44px;
    @media (max-width: 600px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    text-align: center;
  }
`;

  const Text6 = styled.div`
    font-style: normal;
    font-family: Regular2;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    color: #d9915e;
`;

 const Text7 = styled.div`
    font-family: Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    margin: 22px 60px 48px;
    @media (max-width: 1000px) {
      margin: 22px 40px 48px;
    }
    @media (max-width: 600px) {
      margin: 22px 40px 48px;
    }
    @media (max-width: 600px) {
      margin: 22px 40px 48px;
    }
    text-align: center;
`;

  const Text8 = styled.div`
    font-family: Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    margin: 10px 0;
`;

  const Text9 = styled.div`
    font-family: Regular;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

  const Image2 = styled.img`
    text-align: center;
    /* background: #010101; */
    height: 404px;
    width: 838px;
    @media (max-width: 1000px) {
      width: 100%;
      height: 304px;

    }
    @media (max-width: 600px) {
      width: 100%;
      height: 304px;
    }
    @media (max-width: 600px) {
      width: 100%;
      height: 304px;
    }
`;

 const Img22 = styled.img`
    height: 36px;
    margin: 0px 16px;

`;

const Sect2 = styled.section`
  background-size:  auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  margin:0;
`;

    return (
        <Sect2>
        <Container2>
          <Text1>VeeGee Bakers Village</Text1>
          <Text6>The Baking Begins From Here</Text6>
          <Text7>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Ever
            since our humble beginnings, we made sure to put our customers at the center of everything we do.
          </Text7>
          <Image2 src='https://www.veegeebakersvillage.com/assets/images/logo/logo.PNG' />
          <FourColumns>
            <Container5>
              <Img22 src='https://www.veegeebakersvillage.com/assets/images/logo/logo.PNG' />
              <div>
                <Text9>Most secure way to buy</Text9>
                <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8>
              </div>
            </Container5>
            <Container5>
              <Img22 src='https://www.veegeebakersvillage.com/assets/images/logo/logo.PNG' />
              <div>
                <Text9>Sell your timepiece</Text9>
                <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8>
              </div>
            </Container5>
            <Container5>
              <Img22 src='https://www.veegeebakersvillage.com/assets/images/logo/logo.PNG' />
              <div>
                <Text9>Outline client experience</Text9>
                <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8>
              </div>
            </Container5>
            <Container5>
              <Img22 src='https://www.veegeebakersvillage.com/assets/images/logo/logo.PNG' />
              <div>
                <Text9>Certified watchmakers</Text9>
                <Text8>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text8>
              </div>
            </Container5>
          </FourColumns>
        </Container2>
        <TabGroup />
      </Sect2>
    )
}
