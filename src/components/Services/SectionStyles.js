import styled from "styled-components";

export const Section3 = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin-top: -10rem;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-around;
  button {
    margin: 10px;
    background: #20a6da;
    border-radius: 5px;
    padding: 15px 40px;
    border: none;
    color: #f2f2f2;
    :hover {
      filter: brightness(0.9);
      transition: all 0.3s;
    }
  }

  @media screen and (max-width: 780px) {
    padding: 0;
    margin-top: -10rem; 
   }
`;

export const Card4 = styled.div`
  margin: 20px;
  height: 500px;
  width: 550px;
  justify-content: space-between;
  border-radius: 10px;
  padding: 25px;
  h3 {
    font-size: 1.4rem;
    text-align: start;
    font-weight: 400;
    color: #000000;
    strong: {
      font-weight: bold;
    }
  }
`;

export const SubCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 200px;
  width: 730px;


  div {
    margin: 10px;
    margin-right: 20px;
    background: #20a6da;
    border-radius: 5px;
    padding: 20px 45px;
    border: none;
    color: #f2f2f2;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: 780px) {
      padding: 10px 20px;
    }
  }
  div:hover {
    filter: brightness(0.9);
    transition: all 0.3s;
  }
  span {
    margin: 10px;
    background: #20a6da;
    border-radius: 5px;
    padding: 10px 15px;
    border: none;
    color: #f2f2f2;
    text-align: center;
    cursor: pointer;
  }
  span:hover {
    transition: all 0.3s;
    filter: brightness(0.9);
  }

  @media screen and (max-width: 780px) {
    width: 400px;
  }
`;
