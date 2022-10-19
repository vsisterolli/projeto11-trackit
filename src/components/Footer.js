import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useContext } from "react";
import { BASE_URL } from "../assets/constants/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { todayContext, userContext } from "../App";

export default function Footer({loading, setLoading, newDeleted, newMarked}) {

    const [percentage, setPercentage] = useContext(todayContext);
    const [userTodayHabits, setUserTodayHabits] = React.useState([]);
    const navigate = useNavigate("/");
    const user = useContext(userContext);
    const headers = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    /*
        The Footer also have an independant API comunicator so it get's updated even when not in the "Today" route
    */
   
    React.useEffect(() => {
        if(setLoading === "aoba")
            return;
        setLoading(true);
        const promise = axios.get(BASE_URL + "habits/today", headers);
        promise.then(response => {setLoading(false); setUserTodayHabits(response.data)})
        promise.catch(() => navigate("/"));
    }, [newDeleted, newMarked]);

    React.useEffect(() => {
        let aux = 0;
        for(let i = 0; i < userTodayHabits.length; i++)
            if(userTodayHabits[i].done) 
                aux++;
        if(loading === undefined)
            setPercentage([aux, userTodayHabits.length]);
    }, [userTodayHabits])

    return(
        <>
        <FakeFooter/>
        <StyledFooter>
            <Link data-identifier="habit-page-action" disabled={loading} to="/habitos">Hábitos</Link>
            <Link disabled={loading} to="/hoje">
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
            <Link data-identifier="historic-page-action" disabled={loading} to="/historico">Histórico</Link>
        </StyledFooter>
        </>
    )
}

const FakeFooter = styled.footer`
    height: 45px;
    margin-top: 25px;
`

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