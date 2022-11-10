import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #20a6da;

  @media screen and (max-width: 768px) {
    height: 174vh;
  }

  @media screen and (max-width: 480px) {
    height: 140vh;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-bottom: 120px;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 60px;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  background: #20a6da;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid #FFF ;
  border-radius: 30px 30px 30px 30px;
  height: 560px;
  width: 370px;
  padding: 30px;
  box-shadow: 0 2px 6px rgba(0, 1, 1, 0.8);
  transition: all 0.2s ease-in-out;

  color: #FFF;

  flex-wrap: nowrap;
  gap: 20px;
  &:hover {
    transform: scale(1.02);
    transform-origin: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 370px;
    width: 290px;
    gap: 5px;
  }
`;


export const ServicesIcon = styled.img`
  max-height: 460px;
  max-width: 364px;
  margin-top: -30px;
  border-radius: 30px 30px 0px 0px;
  transition: all 0.2s ;

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 287px;
    gap: 5px;
  }

`;

export const ServicesIcon1 = styled.img`
  max-height: 270px;
  max-width: 364px;
  margin-top: -30px;
  border-radius: 30px 30px 0px 0px;
  transition: all 0.2s ;

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 287px;
    gap: 5px;
  }

`;

export const ServicesH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-top: 100px;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ServicesH2 = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ServicesP1 = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  margin-top: 40px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-top: -3px;
    font-size: 0.8rem;
  }
`;
export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  margin-top: 10px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-top: -3px;
    font-size: 0.7rem;
  }
`;


export const ServicesP2 = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  margin-top: 40px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    font-size: 0.8rem;
  }
`;

