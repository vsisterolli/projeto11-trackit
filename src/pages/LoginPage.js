import logo from "../assets/imgs/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { BUTTON_BACKGROUND } from "../assets/constants/colors"
import styled from "styled-components"
import React from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { BASE_URL } from "../assets/constants/constants"


export default function LoginPage({setUserData}) {

    const [userLoginData, setUserLoginData] = React.useState({"email": "", "password": ""})
    const navigate = useNavigate();

    let login = false;

    function handleChange(e) {
        setUserLoginData({
            ...userLoginData,
            [e.target.name]: e.target.value
        })
    }

    function handleLogin(e) {
        login = true;
        const promise = axios.post(BASE_URL + "/auth/login", userLoginData)
        promise.then(response => {
            setUserData(response.data)
            navigate("/hoje")
        })
        promise.catch(e => {
            login = false;
            alert("Os dados dispostos não correspondem a nenhuma conta cadastrada. Cheque a digitação e tente novamente.");
            console.log(e);
        })
    }

    return (
        <StyledLoginPage>
            <img src={logo}></img>
            <input disabled={login} onChange={e => handleChange(e)} value={userLoginData.email} name="email" type="email" placeholder="email"/>
            <input disabled={login} onChange={e => handleChange(e)}  value={userLoginData.password} name="password" type="password" placeholder="senha"/>
            <button disabled={login} onClick={handleLogin}>{(login ? <ThreeDots color="white"/> : "Entrar")}</button>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </StyledLoginPage>
    )

}

const StyledLoginPage = styled.section`
    
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