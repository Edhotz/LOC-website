import styled from "@emotion/styled";

export const Container = styled.div`
    margin: 0;
`

export const Page = styled.div`
    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
`

export const Card = styled.div`
    height: max-content;
    width: 100vw;


    align-items: center;
    justify-content: center;
    
    margin-left: 70px;

    h2 {
         width: 20%;
         height: 10vh;

         font-size: 2.4rem;
         font-weight: 400;
         margin-top: 60px;
     }

     p {
        width: 40%;
         margin-left: 70px;
         font-weight: 400;
         color: #403c3b;
     }
     div {
        display: flex;
     }
     span {
        height: 70vh;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-top: 80px;

        p {
            height: 30vh;
            width: 70%;
            text-align: justify;
            margin-left: 1px;
            margin-top: -40px;

            background-color: #F24B4B;
            color: #ffffff;
            
            padding: 40px;
            border-radius: 20px;
        }:hover {
            filter: brightness(0.9);
            transition: all .6s;
            cursor: pointer;
        }
        
     }
`


export const Header = styled.div`
    height: 40vh;
    width: 100%;
     h1 {
         width: 20%;
         height: 10vh;
         margin-left: 70px;

         font-size: 2.4rem;
         font-weight: 400;
     }

     p {
        width: 40%;
         margin-left: 70px;
         font-weight: 400;
         color: #403c3b;
     }
`