import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 25px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 14px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${(imgStart) =>
    imgStart ? `'col2 col1'` : `col1 col2`};
  grid-gap: 60px;

  @media screen and (max-width: 768px) {
    grid-template-areas: ${(imgStart) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
    flex-wrap: wrap;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  margin-left: -10px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    width: 400px;
    font-size: 25px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 840px;
  padding-top: 0;
  padding-bottom: 50px;
`;

export const TopLine = styled.p`
  color: #20a6da;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 2.5rem;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 468px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  max-width: 340px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 22px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and(max-width: 460px) {
    max-width: 240px;
    font-size: 10px;
  }

  @media screen and(max-width: 768px) {
    font-size: 12px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Text = styled.div`
  color: #fff;
`;
