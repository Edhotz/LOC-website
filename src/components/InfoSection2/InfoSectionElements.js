import styled from "styled-components";

export const Article = styled.div`
  height: 100vh;
  width: 100%;
  padding: 40px;
  margin-top: -140px;

  @media screen and (max-width: 768px) {
    max-height: 130vh;
    margin-top: -360px;
    margin-bottom: 760px;
  }

  boxs {
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;

    box1 {
      width: 320px;
      height: 342.77px;
      background: #20a6da;
      border-radius: 50px 50px 50px 50px;
      transform: matrix(1, 0, 0, 1, 0, 1);
      cursor: pointer;
      h3 {
        position: absolute;
        top: 120px;
        left: 75px;
        color: #ffffff;
      }
      p {
        position: absolute;
        top: 160px;
        left: 50px;
        color: #ffffff;
      }

     
        }
      }
    }
    box1:hover {
      filter: brightness(0.8);
      transition: all 0.3s ease;
    }

    box2 {
      box-sizing: border-box;
      width: 320px;
      height: 342.77px;

      border: 2px solid #20a6da;
      border-radius: 50px 50px 50px 50px;
      transform: matrix(1, 0, 0, 1, 0, 0);
      h3 {
        text-align: center;
        position: absolute;
        top: 120px;
        left: 90px;
        color: #20a6da;
      }
      p {
        position: absolute;
        top: 160px;
        left: 20px;
        color: #20a6da;
      }
    }
    box2:hover {
      background-color: #20a6da;
      transition: all 0.3s;
      h3 {
        color: #ffffff;
      }
      p {
        color: #ffffff;
      }
    }
    box3 {
      box-sizing: border-box;

      width: 320px;
      height: 342.77px;

      border: 2px solid #82c9d9;
      border-radius: 50px 50px 50px 50px;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
    h3 {
      position: absolute;
      top: 120px;
      left: 90px;
      color: #20a6da;
    }
    p {
      position: absolute;
      top: 160px;
      left: 40px;
      color: #20a6da;
    }
  }
  box3:hover {
    background-color: #20a6da;
    transition: all 0.3s;
    h3 {
      color: #ffffff;
    }
    p {
      color: #ffffff;
    }
  }

  @media screen and (max-width: 768px) {
    boxs {
      flex-direction: column;
      padding: 40px;
    }
  }
`;

export const Text1 = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 80px;
  color: #20a6da;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
export const Elipse = styled.div`
  justify-content: center;
  width: 80px;
  margin-left: 8rem;
  margin-top: 2rem;
  height: 83.09px;
  border-radius: 100%;
`;

export const Elipse2 = styled.div`
  justify-content: center;
  width: 80px;
  margin-left: 8rem;
  margin-top: 1rem;
  height: 83.09px;
  border-radius: 100%;
`;

export const Elipse3 = styled.div`
  align-items: center;
  justify-content: center;
  width: 80px;
  margin-left: 8rem;
  margin-top: 1rem;
  height: 83.09px;
  border-radius: 100%;
`;
