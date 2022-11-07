import styled from "styled-components";

export const Article = styled.div`
  max-height: max-content;
  width: 100%;
  padding: 40px;
  margin-top: -140px;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
        margin-top: -160px;
        z-index: 999;
      }
 
  boxs {
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    box1{
      width: 320px;
      height: 342.77px;
      background: #20A6DA;
      border-radius: 50px 50px 50px 50px;
      transform: matrix(1, 0, 0, 1, 0, 1);
      cursor: pointer;
      h3 {
        position: absolute;
        top: 120px;
        left: 50px;
        color: #FFFFFF;
      }
      p {
        position: absolute;
        top: 160px;
        left: 40px;
        color: #FFFFFF;
      }

      @media screen and (max-width: 768px) {
        width: 280px;
        height: 242.77px;
        cursor: pointer;
        p {
          margin-top: -10px;
          font-size: 12px;
      }
  }

      
    } box1:hover {
      background-color: #049dbf;
      transition: all .3s;
      
    }
    
    box2 {
    box-sizing: border-box;
    width: 320px;
    height: 342.77px;
   

    border: 2px solid #20A6DA;
    border-radius: 50px 50px 50px 50px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    h3 {
         text-align: center;
        position: absolute;
        top: 120px;
        left: 70px;
        color: #20A6DA;
      }
      p {
        position: absolute;
        top: 160px;
        left: 30px;
        color: #20A6DA;
      }
    } box2:hover {
      background-color: #20A6DA;
      transition: all .3s;
      h3 {
        color: #FFFFFF;
      }
      p {
        color: #FFFFFF;
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
        left: 80px;
        color: #20A6DA;
      }
      p {
        position: absolute;
        top: 160px;
        left: 40px;
        color: #20A6DA;
      }
    } box3:hover {
      background-color: #20A6DA;
      transition: all .3s;
      h3 {
        color: #FFFFFF;
      }
      p {
        color: #FFFFFF;
      }
    }

    @media screen and (max-width: 768px) {
      boxs {  
      flex-direction: column;
      padding: 40px;
    }
  }
  
  `

export const Text1 = styled.div`
font-size: 2.0rem;
font-weight: 600;
text-align: center;
justify-content: flex-start;
margin-top: 10px;
margin-bottom: 40px;
color: #20A6DA;

@media screen and (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
    }
`
export const Elipse = styled.div`
  justify-content: center;
  width: 80px;
  margin-left: 8rem;
  margin-top: 2rem;
  height: 83.09px;
  border-radius: 100%;
`

export const Elipse2 = styled.div`
justify-content: center;
width: 80px;
margin-left: 8rem;
margin-top: 1rem;
height: 83.09px;
border-radius: 100%;
`

export const Elipse3 = styled.div`
align-items: center;
justify-content: center;
width: 80px;
margin-left: 8rem;
margin-top: 1rem;
height: 83.09px;
border-radius: 100%;
`