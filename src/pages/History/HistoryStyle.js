import styled from "styled-components";
import { UsualHeaderedPage } from "../../assets/styles/UsualHeaderedPage";
import { UsualMobileScreen } from "../../assets/styles/UsualMobileScreen";

export const StyledHistory = styled(UsualHeaderedPage)`
`;

export const Screen = styled(UsualMobileScreen)`
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

    .calendar-container {

        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .react-calendar {
            background-color: white;
            max-width: 352.594px;
            border-radius: 10px;
        }

        .react-calendar__month-view__weekdays__weekday {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 50px;
        }

        .react-calendar__month-view__days{
            display: flex;
            justify-content: center;
        }
        .react-calendar__month-view__weekdays{
            display: flex;
            justify-content: center;
        }

        .react-calendar__tile {
            max-width: 50px;
            height: 50px;
            font-size: 16px;
            background-color: white;
            border: 0px;
            max-height: 100px;
            border-radius: 100px;
        }
        
        .react-calendar__navigation__label__labelText {
            font-size: 18px;
        }
        .react-calendar__navigation__arrow{
            font-size: 18px;
        }
        .react-calendar__year-view__months__month {
            font-size: 18px;
            max-width: 100px;
        }
        .react-calendar__year-view__months {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-calendar__navigation {
            display: flex;
            padding: 10px;
            font-size: 18px;
            button {
                background-color: transparent;
                border: 0px;
            }
        }

    }

`