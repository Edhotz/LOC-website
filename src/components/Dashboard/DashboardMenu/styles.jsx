import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 40px;
  width: 265px;
  height: 600px;
  flex-shrink: 0;
  align-self: center;
  align-items: center;
  justify-self: center;

  margin-left: 40px;
  margin-top: 40px;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.15);
`;

export const Wrapper = styled.ul`
  padding: 20px;
`;

export const Items = styled.div`
  width: 219.5px;
  height: 54px;
  flex-shrink: 0;

  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

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
  margin-left: 50px;
  margin-bottom: 50px;
`;
