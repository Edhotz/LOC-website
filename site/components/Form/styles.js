import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;


gap: 20px;

`

export const Content = styled.div`
    color: #FFFFFF;

 div {
    margin-top: 30px;
 }

 span {
    display: flex;
    align-items: center;
    
    gap: 10px;
 }
`


export const Contact = styled.div`
height: 600px;
width: 400px;

background-color: #20A6DA;
border-radius: 20px;
padding: 30px;
:hover {
    filter: brightness(0.9);
    cursor: pointer;
    transition: all .3s;
}
`

export const FormItems = styled.div`
height: 600px;
width: 800px;
border-radius: 20px;
padding: 20px;

background-color: #20A6DA;
color: #FFFFFF;



 fieldset {
    height: 400px;
    width: 700px;
    border: none;
    justify-content: center;
    margin-top: -20px;
    label {
        width: 160px;

        margin-top: 5px;
        margin-right: 20px;
        
        font-size: 18px;
        font-weight: 600;
    }

    input {
        height: 50px;
        width: 390px;
        border: none;
        background-color: #20A6DA;
        font-size: 1rem;
        border-bottom: 1px solid #FFFFFF;
        padding-bottom: 16px;

        box-sizing: border-box;
        font-weight: 500;
    }

    input:invalid {
    border:1px solid #FF1010;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 30px;
    }

    span {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    textarea {
        min-height: 100px;
        min-width: 390px;
        
        border-radius: 5px;
        border: #20A6DA 1px solid;
        font-size: 1rem;
        padding: 0;


        box-sizing: border-box;
        font-weight: 400;
    }
    
    button {
        margin: 10px;
        background: #f2f2f2;
        border-radius: 5px;
        padding: 15px;
        border: none;
        color: #20A6DA;
    
        margin-left: 40rem;
        :hover {
          transition: all .3s;
          filter: brightness(0.9);
          background-color: #048abf;
          color: #f2f2f2;
        }
      }
}
:hover {
    filter: brightness(0.9);
    transition: all .6s;
}
`

export const Social = styled.div`
    div {
        margin-top: 150px;
    }

`