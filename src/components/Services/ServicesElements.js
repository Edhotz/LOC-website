import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #20A6DA;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    margin-bottom: 120px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;

    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 60px;
        padding: 0 20px;

    }
`
export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px 30px 30px 30px;
    height: 360px;
    width: 370px;
    padding: 30px;
    box-shadow: 0 2px 6px rgba(0, 1, 0, 0.4);
    transition: all 0.2s ease-in-out;
    margin-top: -20px;
    flex-wrap: nowrap;
    &:hover {
        transform: scale(1.02);
        transform-origin: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    max-height: 460px;
    max-width: 170px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    text-align: center;
    font-size: 1rem;
    margin-bottom: 5px;
`

export const ServicesP = styled.p`
    font-size: 0.9rem;
    text-align: justify;
`

