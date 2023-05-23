import styled from "styled-components";

export const InfoSectionMarketingContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 30px;
  margin-top: 5rem;
  margin-bottom: 5rem;

  h2 {
    font-size: 1.2rem;
    color: #20a6da;

    h3 {
      font-size: 0.8rem;
      font-weight: 500;
      color: #000;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 100%;
    padding: 20rem;
    gap: 2rem;
    margin-top: -10rem;
    margin-bottom: -10rem;

    h2 {
      margin-top: 8rem;
      font-size: 2rem;
      color: #20a6da;
      max-width: 79vh;

      h3 {
        font-size: 1.4rem;
        font-weight: 500;
        color: #000;
      }
      p {
        font-weight: 300;
        color: #000;
      }
    }
  }
`;

export const MarketingServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 5rem;
  gap: 1rem;
  margin-bottom: 10rem;
  justify-content: center;
  align-items: center;
  .container {
    position: relative;
    font-family: sans-serif;
  }

  .container .box {
    width: 8.875em;
    height: 12.875em;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.074);
    border: 1px solid rgba(000, 255, 255, 0.090);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
  }

  .container .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container .box .title {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  .container .box div strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  .container .box div p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  .container .box div span {
    font-size: 0.7rem;
    font-weight: 300;
  }

  .container .box div span:nth-child(3) {
    font-weight: 500;
    margin-right: 0.2rem;
  }

  .container .box:hover {
    box-shadow: 0px 0px 20px 1px #20a6da;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    padding: 0rem 25rem;
    gap: 3rem;
    margin-bottom: 10rem;
    .container {
      position: relative;
      font-family: sans-serif;
    }

    .container .box {
      width: 18.875em;
      height: 24.875em;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.074);
      border: 1px solid rgba(255, 255, 255, 0.222);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-radius: 0.7rem;
      transition: all ease 0.3s;
    }

    .container .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .container .box .title {
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: 0.1em;
    }

    .container .box div strong {
      display: block;
      margin-bottom: 0.5rem;
    }

    .container .box div p {
      margin: 0;
      font-size: 0.9em;
      font-weight: 300;
      letter-spacing: 0.1em;
    }

    .container .box div span {
      font-size: 0.7rem;
      font-weight: 300;
    }

    .container .box div span:nth-child(3) {
      font-weight: 500;
      margin-right: 0.2rem;
    }

    .container .box:hover {
      box-shadow: 0px 0px 20px 1px #20a6da;
      border: 1px solid rgba(255, 255, 255, 0.454);
    }
  }
`;

export const Card = styled.div`
  box-sizing: border-box;
  width: 490px;
  height: 224px;
  background: rgba(217, 217, 217, 0.58);
  padding: 10px;
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;

  :hover {
    border: 1px solid black;
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  @media screen and (min-width: 1200px) {
    width: 390px;
    height: 524px;
  }
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;

  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const DetailsCards = styled.div`
  margin-top: 20rem;
  margin-right: 10rem;
  margin-bottom: 55rem;
  padding: 0rem 1rem;
  .cards {
    left: 16.2rem;
    position: relative;
  }

  .card {
    z-index: 1;
    position: absolute;
    width: 200px;
    height: 290px;
    border-radius: 10px;
    transition: all 0.5s ease-out;
    overflow: hidden;
    transform: translateX(0px) translateY(0px) perspective(905px) rotateX(0deg)
      rotateY(0deg) rotateZ(-8deg);
  }

  .card.one {
    top: -120px;
    left: -160px;
    background: linear-gradient(180deg, #232a34 0%, #000066 100%);
    color: #ffffff;
  }

  .card.two {
    top: -95px;
    left: -125px;
    background: linear-gradient(180deg, #20a6da 0%, #232a34 99%);
    color: #ffffff;
  }

  .card.three {
    top: -70px;
    left: -100px;
    background: linear-gradient(180deg, #ffffff 0%, #20a6da 100%);
    color: #ffffff;
  }

  .card:hover {
    z-index: 2;
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) !important;
    transition: all 0.8s ease-out;
  }

  .cardDetails {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.8);
    transition: 0.5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
  }

  .card:hover .cardDetails {
    transform: perspective(1000px) rotateY(0deg);
  }

  .cardDetailsHaeder {
    font-weight: 600;
    color: #ffffff;
  }

  .cardDetailsButton {
    padding: 3px 6px;
    border-radius: 25px;
    background-color: #ffffff;
    color: #000;
    font-weight: 400;
    font-size: 1rem;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 20rem;
    margin-right: 10rem;
    margin-bottom: 55rem;
    padding: 0rem 30.5rem;
    .cards {
      left: 20rem;
      position: relative;
    }

    .card {
      z-index: 1;
      position: absolute;
      width: 300px;
      height: 390px;
      border-radius: 10px;
      transition: all 0.5s ease-out;
      overflow: hidden;
      transform: translateX(0px) translateY(0px) perspective(905px)
        rotateX(0deg) rotateY(0deg) rotateZ(-8deg);
    }

    .card.one {
      top: -120px;
      left: -160px;
      background: linear-gradient(180deg, #232a34 0%, #000066 100%);
      color: #ffffff;
    }

    .card.two {
      top: -95px;
      left: -125px;
      background: linear-gradient(180deg, #20a6da 0%, #232a34 99%);
      color: #ffffff;
    }

    .card.three {
      top: -70px;
      left: -100px;
      background: linear-gradient(180deg, #ffffff 0%, #20a6da 100%);
      color: #ffffff;
    }

    .card:hover {
      z-index: 2;
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) !important;
      transition: all 0.8s ease-out;
    }

    .cardDetails {
      width: 100%;
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      background: rgba(0, 0, 0, 0.8);
      transition: 0.5s;
      transform-origin: left;
      transform: perspective(2000px) rotateY(-90deg);
    }

    .card:hover .cardDetails {
      transform: perspective(1000px) rotateY(0deg);
    }

    .cardDetailsHaeder {
      font-weight: 600;
      color: #ffffff;
    }

    .cardDetailsButton {
      padding: 3px 6px;
      border-radius: 25px;
      background-color: #ffffff;
      color: #000;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

export const SubTitleMarketingPage = styled.h2`
  align-items: center;
  text-align: justify;
  padding: 4rem;
  font-size: 1rem;
  font-weight: 400;

  strong {
    color: #20a6da;
    font-size: 1rem;
    font-weight: bold;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 0rem 25rem;
    font-size: 1.5rem;
    margin-top: 15rem;
    margin-bottom: 15rem;
    font-weight: 400;

    strong {
      color: #20a6da;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
