import styled from "styled-components";

export const InfoSectionMarketingContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 20px;
  margin-bottom: 10rem;

  h2 {
    font-size: 1.3rem;
    color: #20a6da;

    p {
      font-weight: 500;
      color: #000;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 100%;
    padding: 10rem;

    h2 {
      font-size: 2rem;
      color: #20a6da;

      p {
        font-weight: 500;
        color: #000;
      }
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
