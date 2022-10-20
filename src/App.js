import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import React, { createContext } from "react";
import History from "./pages/History/History";
import Today from "./pages/Today/Today";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";

export const userContext = createContext(null);
export const todayContext = createContext(null);

export default function App() {

  const userData = React.useState({});
  const todayDataState = React.useState([0, 0]);

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <userContext.Provider value={userData}>
      <todayContext.Provider value={todayDataState}>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/habitos" element={<HabitsPage/>}/>
          <Route path="/historico" element={<History/>}/>
        </Routes>
      </todayContext.Provider>
      </userContext.Provider>
    </BrowserRouter>
  )
}
