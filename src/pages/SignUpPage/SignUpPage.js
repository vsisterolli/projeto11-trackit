import logo from "../../assets/imgs/logo.png"
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledSignUpPage } from "./SignUpPageStyle";
import {ThreeDots} from "react-loader-spinner";
import axios from "axios";
import { BASE_URL } from "../../assets/constants/constants";

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
            <img alt="track-it logo" src={logo}></img>  
            <input data-identifier="input-email" disabled={loading} onChange={e => handleChange(e)} value={newUserData.email} name="email" type="email" placeholder="email"/>
            <input data-identifier="input-password" disabled={loading} onChange={e => handleChange(e)}  value={newUserData.password} name="password" type="password" placeholder="senha"/>
            <input data-identifier="input-name" disabled={loading} onChange={e => handleChange(e)} value={newUserData.name} name="name" type="text" placeholder="nome"/>
            <input data-identifier="input-photo" disabled={loading} onChange={e => handleChange(e)}  value={newUserData.image} name="image" type="text" placeholder="foto"/>
            <button disabled={loading} onClick={handleSubmit}>{(loading ? <ThreeDots color="white"/> : "Entrar")}</button>
            <Link data-identifier="back-to-login-action" to='/'>Já tem uma conta? Faça login!</Link>
        </StyledSignUpPage>
    )

}

