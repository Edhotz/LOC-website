import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  height: 37.223px;
  position: absolute;
  top: 30px;
  left: 400px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.15);

  display: flex;

  padding: 50px;

  align-items: center;
  justify-content: space-between;

  margin: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 500px;
  align-items: center;
  justify-content: space-between;
`;

export const Items = styled.div``;

export const H1 = styled.h1`
  color: var(--gray-gray-700, #2d3748);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
`;
