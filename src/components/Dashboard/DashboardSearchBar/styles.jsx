import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;

  background: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.15);
  z-index: -999;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 300px;
  justify-content: space-around;
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
