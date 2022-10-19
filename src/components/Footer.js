import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { todayContext, userContext } from "../App";

export default function Footer() {

    const [percentage, setPercentage] = useContext(todayContext);
    console.log(percentage)

    return(
        <StyledFooter>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
                <div>
                    <CircularProgressbar
                        value={100 * percentage[0]/percentage[1]}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            fontSize: "200px"
                        })}
                    />
                </div>
            </Link>
            <Link to="/historico">Histórico</Link>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`

    padding: 31px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: white;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 70px;

    div {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: -31px;
        font-family: 'Lexend Deca';
        font-size: 17.976px;
        line-height: 22px;
        height: 91px;
        width: 91px;
    }

    a {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: #52B6FF;
    }

`