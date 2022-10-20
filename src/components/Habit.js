import styled from "styled-components";
import { TrashOutline } from 'react-ionicons'
import { StyledDayButton } from "../assets/styles/DaysButtons";
import axios from "axios";
import { BASE_URL } from "../assets/constants/constants";
import { useContext } from "react";
import { userContext } from "../App";

export default function Habit({setExcludedHabits, excludedHabits, data}) {

    const days = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [user, setUser] = useContext(userContext);
    const headers = {
        "headers": {
            "Authorization": `Bearer ${user.token}`
        }
    }

    function handleDeletion() {
        if(window.confirm("Realmente deseja deletar esse hábito?")) {
            axios.delete(BASE_URL + `habits/${data.id}`, headers)
            .then(() => setExcludedHabits(excludedHabits+1))
            .catch(e => console.log(e))
        }
    }

    return (
        <StyledHabit>
            <div>
                <h3 data-identifier="habit-name">{data.name}</h3>
                <TrashOutline data-identifier="delete-habit-btn" onClick={handleDeletion}/>
            </div>
            {days.map((value, index) => <StyledDayButton key={index} index={index} selectedDays={data.days}>{value}</StyledDayButton>)}
        </StyledHabit>
    )
}

const StyledHabit = styled.div`
    
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    margin-bottom: 10px;
    
    div {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        padding-top: 13px;
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        svg {
            position: absolute;
            right: 10px;
            top: 11px;
        }
    }

`