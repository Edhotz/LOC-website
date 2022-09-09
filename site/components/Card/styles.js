import styled from "@emotion/styled";

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    width: 43vw;
    height: 40vh;
    padding: 30px;
    border-radius: 10px;

    background-color: #20A6DA;
    color: #ffffff;
    justify-content: center;
    
    div {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    
    p {
        margin-top: -90px;
        margin-right: 54px;
        height: 40px;
        width: 900px;
        text-align: justify;
    }

    span {
        display: flex;
        margin-top: -60px;
        background-color: #ffffff;
        height: 30vh;
        width: 50vw;
        
        border-radius: 10px;
        
    }

    :hover {
       filter: brightness(0.9);
       transition: all .6s;
    }
`