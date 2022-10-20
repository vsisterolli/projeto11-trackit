import styled from "styled-components";
import { UsualButton } from "../../assets/styles/UsualButton";
import { UsualHeaderedPage } from "../../assets/styles/UsualHeaderedPage";


export const StyledHabitsPresentation = styled.div`
    padding-top: 28px;
    max-width: 600px;
    margin: 0 auto;
    .container {        
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
`

export const StyledUsualButton = styled(UsualButton)`
    width: 40px;
    height: 35px;
`

export const StyledTodayPage = styled(UsualHeaderedPage)`
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h4 {
        display: ${props => props.habitsSize > 0 ? "none" : "initial"};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`