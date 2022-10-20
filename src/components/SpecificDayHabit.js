import styled from "styled-components";
import { CheckmarkOutline } from 'react-ionicons'
import React from "react";


export default function SpecificDayHabit({data}) {
    
    console.log(data)
    return (
        <StyledHabit data-identifier="today-infos" marked={data.done} record={data.highestSequence === data.currentSequence}>
            <div className="container">
                <h3>{data.name}</h3>
                <button data-identifier="done-habit-btn" disabled={true}  className="habit-made-mark">
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
        height: 100%;
        align-items: center;
        width: 100%;
        position: relative;
        padding-top: 13px;
        padding-left: 15px;
    }

`