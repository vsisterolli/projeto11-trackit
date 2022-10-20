import logo from "../../assets/imgs/logo.png"
import { Link, useNavigate } from "react-router-dom"
import { StyledLoginPage } from "./LoginPageStyle"
import React from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { BASE_URL } from "../../assets/constants/constants"
import { userContext } from "../../App"
import { useContext } from "react"

export default function LoginPage() {

    const [userLoginData, setUserLoginData] = React.useState({"email": "", "password": ""})
    const [userData, setUserData] = useContext(userContext);
    const navigate = useNavigate();

    const userStorage = localStorage;   

    let login = false;

    React.useEffect(() => {
        if(userStorage.getItem("previous_login") === null)
            return;
        setUserData(JSON.parse(userStorage.getItem("previous_login")));
        navigate("/hoje")
    }, [])

    function handleChange(e) {
        setUserLoginData({
            ...userLoginData,
            [e.target.name]: e.target.value
        })
    }

    function handleLogin(e) {
        login = true;
        const promise = axios.post(BASE_URL + "auth/login", userLoginData)
        promise.then(response => {
            setUserData(response.data)
            userStorage.setItem("previous_login", JSON.stringify(response.data));
            navigate("/hoje")
        })
        promise.catch(e => {
            login = false;
            alert(e.response.data.message);
        })
    }

    return (
        <StyledLoginPage>
            <img alt="track-it logo" src={logo}></img>
            <input data-identifier="input-email" disabled={login} onChange={e => handleChange(e)} value={userLoginData.email} name="email" type="email" placeholder="email"/>
            <input data-identifier="input-password" disabled={login} onChange={e => handleChange(e)}  value={userLoginData.password} name="password" type="password" placeholder="senha"/>
            <button data-identifier="login-btn" disabled={login} onClick={handleLogin}>{(login ? <ThreeDots color="white"/> : "Entrar")}</button>
            <Link data-identifier="sign-up-action" to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
        </StyledLoginPage>
    )

}

