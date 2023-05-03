import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 175vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffff;
  margin-bottom: 5rem;
  
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
  
  @media screen and (max-width: 460px) {
    height: 50vh;
    margin-bottom: 3rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 14px;
  padding: 0 400px;
  margin-bottom: 120px;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    height: 100vh;
    margin-top: 30px;
    margin-bottom: 20px;
    grid-template-columns: 1fr;
    grid-gap: 60px;
    margin-bottom: 40rem;
  }

  @media screen and (max-width: 390px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
    padding: 0 20px;
    margin-bottom: 40rem;
  }
  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    height: 60vh;
    grid-gap: 40px;
    padding: 40px;
    padding: 50px;
    margin-top: 90rem;
    margin-bottom: 65rem;
  }
`;
export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid #fff;
  border-radius: 30px 30px 30px 30px;
  height: 560px;
  width: 370px;
  padding: 30px;
  box-shadow: 0 2px 6px rgba(0, 1, 1, 0.8);
  transition: all 0.2s ease-in-out;

  color: #20a6da;

  flex-wrap: nowrap;
  gap: 20px;
  &:hover {
    transform: scale(1.02);
    transform-origin: all 0.2 ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 410px;
    width: 290px;
    gap: 5px;
  }
  @media screen and (max-width: 460px) {
    height: 410px;
    width: 290px;
    gap: 5px;
    margin-top: -2rem;
    margin-bottom: 1rem;
  }
`;

export const ServicesIcon = styled.img`
  max-height: 460px;
  max-width: 364px;
  margin-top: -30px;
  border-radius: 30px 30px 0px 0px;
  transition: all 0.2s;

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
  transition: all 0.2s;

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 287px;
    gap: 5px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #20a6da;
  }
`;

export const ServicesH2 = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 13px;

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
  margin-top: 15px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-top: -3px;
    font-size: 0.7rem;
  }
`;

export const ServicesP2 = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  margin-top: 45px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    font-size: 0.8rem;
  }
`;

export const ServicesP3 = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  margin-top: -10px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    font-size: 0.8rem;
  }
`;
