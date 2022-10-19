import styled from "styled-components";
import React from "react";
import { UsualButton } from "../assets/styles/UsualButton";
import { BUTTON_BACKGROUND, BUTTON_COLOR } from "../assets/constants/colors";
import axios from "axios";
import { StyledDayButton } from "../assets/styles/DaysButtons";
import { BASE_URL } from "../assets/constants/constants";
import { userContext } from "../App";
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function HabitCreation({excludedHabits, setExcludedHabits, creating, setCreating}) {
    
    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [selectedDays, setSelectedDays] = React.useState([]);
    const [habitName, setHabitName] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const user = useContext(userContext);
    const headers = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function handleSelection(index) {
        if(selectedDays.some(value => value === index))
            setSelectedDays(selectedDays.filter(value => value != index));
        else
            setSelectedDays([...selectedDays, index]);
    }

    function createHabit() {
        setLoading(true);
        const objPOST = {
            "name": habitName,
            "days": selectedDays
        }
        const promise = axios.post(BASE_URL + "habits", objPOST, headers);
        promise.then(() => {
            setLoading(false);
            setExcludedHabits(excludedHabits + 1);
            setHabitName("");
            setSelectedDays([]);
        })
        promise.catch((e) => {
            const aux = String(e.response.data.message);
            alert("Ops! Algo deu errado: " + {aux})
        });
    }

    return (
        <StyledHabitCreation creating={creating}>
            <input data-identifier="input-habit-name" onChange={(e) => setHabitName(e.target.value)} value={habitName} type="text" placeholder="nome do hábito"></input>
            <div>
            {days.map((value, index) => <StyledDayButton data-identifier="week-day-btn" disabled={loading} index={index} selectedDays={selectedDays} onClick={() => handleSelection(index)} key={index}>{value}</StyledDayButton>)}
            </div>
            <Container>
                <StyledReversedButton data-identifier="cancel-habit-create-btn" onClick={() => setCreating(false)}>Cancelar</StyledReversedButton>
                <StyledUsualButton data-identifier="save-habit-create-btn" onClick={createHabit}>{loading ? <ThreeDots color="white" width="60px"/> : "Salvar"}</StyledUsualButton>
            </Container>
        </StyledHabitCreation>
    )
}

const StyledUsualButton = styled(UsualButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 35px;
    font-size: 15.976px;
    line-height: 20px;
`

const StyledReversedButton = styled(StyledUsualButton)`
    color: ${BUTTON_BACKGROUND};
    background-color: ${BUTTON_COLOR};
    margin-right: 10px;
`

const Container = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
`

const StyledHabitCreation = styled.div`
    display: ${props => props.creating ? "block" : "none"};
    height: 180px;
    padding: 18px;
    background-color: white;
    input {
        height: 45px; 
        padding-left: 11px;
        width: 95%;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        ::placeholder {
            color: #DBDBDB;
        }
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    margin-bottom: 29px;
`
