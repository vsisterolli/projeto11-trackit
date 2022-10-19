import Header from "../components/Header";
import styled from "styled-components";
import HabitCreation from "../components/HabitCreation";
import { UsualButton } from "../assets/styles/UsualButton";
import React, { useContext } from "react";
import Footer from "../components/Footer";
import Habit from "../components/Habit";
import axios from "axios";
import { BASE_URL } from "../assets/constants/constants";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function HabitsPage() {
    
    const [creating, setCreating] = React.useState(false);
    const [habits, setHabits] = React.useState([])
    const [excludedHabits, setExcludedHabits] = React.useState(0);
    const user = useContext(userContext);
    const navigate = useNavigate();

    const headers = {
        "headers": {
            "Authorization": `Bearer ${user.token}`
        }
    }
    React.useEffect(() => {
        axios.get(BASE_URL + "/habits", headers)
        .then(response => setHabits(response.data))
        .catch(() => navigate("/"));
    }, [excludedHabits])

    return (
        <>
        <Header/>
        <StyledTodayPage>    
            <StyledHabitsPresentation>
                <div className="container">
                    <h2>Meus hábitos</h2>
                    <StyledUsualButton onClick={() => setCreating(!creating)}>+</StyledUsualButton>
                </div>
                <HabitCreation creating={creating} setCreating={setCreating}/>
                {habits.map((value, index) => <Habit setExcludedHabits={setExcludedHabits} excludedHabits={excludedHabits} key={index} data={value}/>)}
                <h4>Você não tem nenhum hábito cadastrado ainda.<br/>Adicione um hábito para começar a trackear!</h4>
            </StyledHabitsPresentation>
            <Footer/>
        </StyledTodayPage>
        </>
    )
}

export const StyledHabitsPresentation = styled.div`
    padding-top: 28px;
    width: 90vw;
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

export const StyledTodayPage = styled.section`
    height: calc(100vh - 140px);
    max-height: calc(100vh - 140px);
    overflow: auto;
    background-color: #f5f5f5;
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
        font-style: normal;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`