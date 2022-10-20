import { BUTTON_BACKGROUND } from "../../assets/constants/colors"
import styled from "styled-components"
import { UsualHeaderedPage } from "../../assets/styles/UsualHeaderedPage"

export const StyledTodayPage = styled(UsualHeaderedPage)`

    button {
        width: 40px;
        height: 35px;
        border: 0px;
        background: ${BUTTON_BACKGROUND};
        border-radius: 4.63636px;
        cursor: pointer;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        font-size: 26.976px;
        line-height: 34px;
    }
    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h4 {
        font-size: 17.976px;
        line-height: 22px;
        margin-bottom: 28px;
        color: ${props => (props.completed > 0 ? "#8FC549" : "#BABABA")};
    }
`

export const StyledHabitsPresentation = styled.div`
    overflow: auto;
    padding-top: 28px;
    width: 90vw;
    max-width: 600px;
    margin: 0 auto;
`