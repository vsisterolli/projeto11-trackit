import styled from "styled-components";
import { CheckmarkOutline } from 'react-ionicons'
import { todayContext, userContext } from "../App";
import React from "react";
import { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../assets/constants/constants";

export default function TodayHabit({data}) {
    
    const [marked, setMarked] = React.useState((data.done === true));
    const [completed, setCompleted] = useContext(todayContext);

    const user = useContext(userContext);

    console.log(completed)

    function handleCompletion() {
        setMarked(!marked);
        setCompleted([completed[0] + (marked ? -1 : 1), completed[1]]);
        const headers = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const promise = axios.post(BASE_URL + `habits/${data.id}/${marked ? "uncheck" : "check"}`);
        promise.then(response => console.log(response.data)).catch(e => console.log(e));
    }
    
    return (
        <StyledHabit marked={marked} record={data.highestSequence === data.currentSequence}>
            <div className="container">
                <div className="text">
                    <h3>{data.name}</h3>
                    <h5>Sequência atual: <span className="done">{data.currentSequence} {data.currentSequence == 1 ? "dia" : "dias"}</span></h5>
                    <h5>Seu recorde: <span className="record">{data.highestSequence} {data.highestSequence == 1 ? "dia" : "dias"}</span></h5>
                </div>
                <button onClick={handleCompletion} className="habit-made-mark">
                    <CheckmarkOutline/>
                </button>
            </div>
        </StyledHabit>
    )
}

const StyledHabit = styled.div`
    
    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

    .habit-made-mark {
        width: 69px;
        height: 69px;
        position: absolute;
        right: 13px;
        top: 13px;
        background: ${props => props.marked ? "#8FC549" : "#EBEBEB"};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
    
    .done {
        color: ${props => props.marked ? "#8FC549" : "#666666"};
    }

    .record {
        color: ${props => props.record ? "#8FC549" : "#666666"};
    }

    h3 {
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    h5 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }

    .container {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        padding-top: 13px;
        padding-left: 15px;
    }

`