import styled from 'styled-components';

export const FourColumns = styled.div`
  display: grid;
  margin-top: 80px;
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

export const FourColumnsResponsive = styled.div`
  display: grid;
  margin-top: 24px;
  grid-gap: 0px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-gap: 0px;
    grid-template-columns: repeat(2, 1fr);
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

export const ThreeColumns = styled.div`
display: grid;
margin-top: 80px;
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
  grid-template-columns: repeat(3, 1fr);
}
`;
    
    export const Container2 = styled.div`
    text-align: center;
    margin-top: 0px;
    margin: 80px 0 24px 0;
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

  export const Container5 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: center;
    padding: 12px;
    /* animation-name: fadeInUp; */
    /* transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s; */
  `;

  export const Text1 = styled.div`
    font-family: 'IBM Plex Serif', 'serif';
    text-transform: uppercase;
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

  export const Text6 = styled.div`
    font-family: 'IBM Plex Serif', 'serif';
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    color: #d9915e;
`;

 export const Text7 = styled.div`
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

  export const Text8 = styled.div`
    font-family: Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align:center;
    margin: 12px;
`;

  export const Text9 = styled.div`
    font-family: Regular;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
`;

  export const Image2 = styled.img`
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

 export const Img22 = styled.img`
    height: 100%;
    width: 90%;
    margin: 24px;

`;

export const Sect2 = styled.section`
  background-size:  auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  margin:0;
`;