import styled from "styled-components";

export const Section3 = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    margin-top: -13rem;
    margin-bottom: 30px;
    background: #101522;
    align-items: center;
    justify-content: space-around;
    button {
        margin: 10px;
        background: #20A6DA;
        border-radius: 5px;
        padding: 15px 40px;
        border: none;
        color: #f2f2f2;
        :hover {
          filter: brightness(0.9);
          transition: all .3s;
        }
      }
  `;

  export const Card3 = styled.div`
    height: 500px;
    width: 860px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 25px;
    div {
      font-size: 2.2rem;
      margin-top: 10rem;
      margin-left: 4rem;
      align-items: center;
    }
  `;

  export const Card4 = styled.div`
    margin: 20px;
    height: 500px;
    width: 550px;
    background: #101522;
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
    }}
    `

export const SubCard = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
div {
  margin: 10px;
  background: #20A6DA;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  color: #f2f2f2;
  text-align: center;
  cursor: pointer;
}div:hover {
      filter: brightness(0.9);
      transition: all .3s;
  }
  span {
  margin: 10px;
  background: #20A6DA;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  color: #f2f2f2;
  text-align: center;
  cursor: pointer;
}span:hover {
      transition: all .3s;
      filter: brightness(0.9);
  }
`