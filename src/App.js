import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import React, { createContext } from "react";
import Today from "./pages/Today/Today";
import SignUpPage from "./pages/SignUpPage";
import HabitsPage from "./pages/HabitsPage";

export const userContext = createContext(null);
export const todayContext = createContext(null);

export default function App() {

  const [userData, setUserData] = React.useState({});
  const todayDataState = React.useState([0, 0]);

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <userContext.Provider value={userData}>
      <todayContext.Provider value={todayDataState}>
        <Routes>
          <Route path="/" element={<LoginPage userData={userData} setUserData={setUserData}/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/habitos" element={<HabitsPage/>}/>
        </Routes>
      </todayContext.Provider>
      </userContext.Provider>
    </BrowserRouter>
  )
}
