import logo from "../assets/imgs/logo.png"
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BUTTON_BACKGROUND } from "../assets/constants/colors";
import {ThreeDots} from "react-loader-spinner";
import axios from "axios";
import { BASE_URL } from "../assets/constants/constants";

export default function SignUpPage() {

    const [newUserData, setNewUserData] = React.useState({"email": "", "password": "", "name": "", "image": ""})
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
        const promise = axios.post(BASE_URL + "auth/sign-up", newUserData);
        promise.then(() => navigate("/"));
        promise.catch((e) => alert("Ops! Cheque se os dados foram inseridos corretamente. " + e.response.data.message + "\n" + e.response.data.details));
    }

    return (
        <StyledSignUpPage>
            <img src={logo}></img>  
            <input data-identifier="input-email" disabled={loading} onChange={e => handleChange(e)} value={newUserData.email} name="email" type="email" placeholder="email"/>
            <input data-identifier="input-password" disabled={loading} onChange={e => handleChange(e)}  value={newUserData.password} name="password" type="password" placeholder="senha"/>
            <input data-identifier="input-name" disabled={loading} onChange={e => handleChange(e)} value={newUserData.name} name="name" type="text" placeholder="nome"/>
            <input data-identifier="input-photo" disabled={loading} onChange={e => handleChange(e)}  value={newUserData.image} name="image" type="text" placeholder="foto"/>
            <button disabled={loading} onClick={handleSubmit}>{(loading ? <ThreeDots color="white"/> : "Entrar")}</button>
            <Link data-identifier="back-to-login-action" to='/'>Já tem uma conta? Faça login!</Link>
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