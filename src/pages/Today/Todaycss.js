import { BUTTON_BACKGROUND } from "../../assets/constants/colors"
import styled from "styled-components"

export const StyledTodayPage = styled.section`
    height: calc(100vh - 140px);
    max-height: calc(100vh - 140px);
    overflow: auto;
    background-color: #f5f5f5;
    button {
        width: 40px;
        height: 35px;
        border: 0px;
        background: ${BUTTON_BACKGROUND};
        border-radius: 4.63636px;
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        font-size: 26.976px;
        line-height: 34px;
    }
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h4 {
        font-family: 'Lexend Deca';
        font-size: 17.976px;
        line-height: 22px;
        margin-bottom: 28px;
        color: ${props => (props.completed > 0 ? "#8FC549" : "#BABABA")};
    }
`

export const StyledHabitsPresentation = styled.div`
    padding-top: 28px;
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
`