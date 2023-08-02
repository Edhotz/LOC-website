import styled from "styled-components";

export const Container = styled.div`
  width: 265px;
  height: 900px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.05);
`;

export const Wrapper = styled.ul`
  padding: 20px;
`;

export const Items = styled.div`
  width: 219.5px;
  height: 54px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 8px;
  background: var(--black-amp-white-white, #fff);
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.1);

  transition: ease-in-out 0.3s;
  :hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

export const Text = styled.h5`
  color: var(--gray-gray-700, #2d3748);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
`;
