import styled from "styled-components"
import { DAYS_BUTTON_BACKGROUND_UNUSED, DAYS_BUTTON_BACKGROUND_USED, DAYS_BUTTON_COLOR_UNUSED, DAYS_BUTTON_COLOR_USED } from "../constants/colors"

export const StyledDayButton = styled.button`
    margin-top: 8px;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    line-height: 25px;
    margin-right: 4px;
    color: ${props => props.selectedDays.some(value => value === props.index) ? DAYS_BUTTON_COLOR_UNUSED : DAYS_BUTTON_COLOR_USED};
    background: ${props => props.selectedDays.some(value=> value === props.index) ? DAYS_BUTTON_BACKGROUND_UNUSED : DAYS_BUTTON_BACKGROUND_USED};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`