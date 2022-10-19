import logo from "../assets/imgs/logo.png"
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BUTTON_BACKGROUND } from "../assets/styles/colors";
import {ThreeDots} from "react-loader-spinner";
import axios from "axios";

export default function SignUpPage() {

    const [newUserData, setNewUserData] = React.useState({"email": "", "password": ""})
    const navigate = useNavigate();

    let loading = false;

    function handleChange(e) {
        setNewUserData({
            ...newUserData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit() {
        loading = true;
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", newUserData);
        promise.then(() => navigate("/"));
        promise.catch(() => alert("Ops! Cheque se os dados foram inseridos corretamente."));
    }

    return (
        <StyledSignUpPage>
            <img src={logo}></img>  
            <input disabled={loading} onChange={e => handleChange(e)} value={newUserData.email} name="email" type="email" placeholder="email"/>
            <input disabled={loading} onChange={e => handleChange(e)}  value={newUserData.password} name="password" type="password" placeholder="senha"/>
            <input disabled={loading} onChange={e => handleChange(e)} value={newUserData.name} name="name" type="text" placeholder="nome"/>
            <input disabled={loading} onChange={e => handleChange(e)}  value={newUserData.image} name="image" type="text" placeholder="foto"/>
            <button disabled={loading} onClick={handleSubmit}>{(loading ? <ThreeDots color="white"/> : "Entrar")}</button>
            <Link to='/'>Já tem uma conta? Faça login!</Link>
        </StyledSignUpPage>
    )

}

const StyledSignUpPage = styled.section`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    
    img {
        margin-bottom: 33px;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        height: 45px;
        padding: 11px;
        width: 303px;
        margin-bottom: 6px;
        input::placeholder {
            color: #DBDBDB;
        }
    }

    button {
        width: 303px;
        height: 45px;
        border: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${BUTTON_BACKGROUND};
        border-radius: 4.63636px;
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
    }

    a {
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 17px;
        margin-top: 36px;
        color: #52B6FF;
    }

    @media (max-width: 900px) {
        a {
            font-size: 14px;
        }
    }

`