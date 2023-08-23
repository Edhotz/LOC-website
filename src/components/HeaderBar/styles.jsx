import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 12vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 768px) {
    width: 67%;
    height: fit-content;
    font-size: 12px;
    margin: 70px;
    flex-wrap: wrap;
    padding: 5%;
  }

  @media screen and (max-width: 480px) {
    margin-left: 100px;

    height: max-content;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  box-sizing: border-box;
  margin-left: 10px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 20rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }

  @media screen and (max-width: 480px) {
    gap: 0rem;
  }
`;

export const H1 = styled.h1`
  color: var(--gray-gray-700, #2d3748);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
`;
