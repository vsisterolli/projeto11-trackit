import styled from "styled-components"
import { BUTTON_BACKGROUND } from "../../assets/constants/colors"

export const StyledLoginPage = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    
    img {
        margin-bottom: 33px;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        height: 45px;
        padding: 11px;
        width: 303px;
        margin-bottom: 6px;
        input::placeholder {
            color: #DBDBDB;
        }
    }

    button {
        width: 303px;
        height: 45px;
        border: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${BUTTON_BACKGROUND};
        border-radius: 4.63636px;
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
    }

    a {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 17px;
        margin-top: 36px;
        color: #52B6FF;
    }

    @media (max-width: 900px) {
        a {
            font-size: 14px;
        }
    }

`