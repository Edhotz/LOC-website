import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 100px;
  width: 265px;
  height: 600px;
  flex-shrink: 0;
  align-self: center;
  align-items: center;
  justify-self: center;

  margin-left: 40px;
  margin-top: 40px;

  background: #fff;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.div`
  width: 260.5px;
  height: 54px;
  flex-shrink: 0;

  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 8px;
  background: var(--black-amp-white-white, #fff);
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.1);

  transition: ease-in-out 0.3s;
  :hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

export const Text = styled.a`
  color: var(--gray-gray-700, #2d3748);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */

  text-decoration: none;
`;

export const LogoImage = styled.img`
  align-self: center;
  margin-top: 20px;
  margin-left: 0px;
  margin-bottom: 50px;
`;
