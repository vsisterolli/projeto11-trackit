import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import React, { createContext } from "react";
import Today from "./pages/Today";
import SignUpPage from "./pages/SignUpPage";

export const userContext = createContext(null);

export default function App() {

  const [userData, setUserData] = React.useState({});

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <userContext.Provider value={userData}>
        <Routes>
          <Route path="/" element={<LoginPage userData={userData} setUserData={setUserData}/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/hoje" element={<Today/>}/>
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  )
}
