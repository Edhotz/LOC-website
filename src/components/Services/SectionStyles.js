import styled from "styled-components";

export const Section3 = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  margin-top: 120px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 780px) {
    padding: 0;
    margin-top: -10rem;
  }
`;

export const Card4 = styled.div`
  height: 50px;
`;

export const SubCard = styled.div`
  display: flex;
  padding: 20px;
  div {
    font-size: 13px;
    padding: 10px;
    font-weight: 700;
    margin: 5px;
    color: #20a6da;
    text-align: center;
  }
  span {
  font-size: 13px;
  font-weight: 700;
  margin-top: 15px;
  color: #20a6da;
 }

 
 @media screen and (max-width: 780px) {
  margin-top: 100px;
  margin-bottom: 100px; 
  flex-direction: column;
    justify-items: center;
    align-items: justify;
  }
`;
