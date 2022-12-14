import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import React, { createContext } from "react";
import History from "./pages/History/History";
import Today from "./pages/Today/Today";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import DayHistory from "./pages/DayHistory/DayHistory";

export const userContext = createContext(null);
export const todayContext = createContext(null);
export const dayContext = createContext(null);

export default function App() {

  const dayData = React.useState([]);
  const userData = React.useState({});
  const todayDataState = React.useState([0, 0]);

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <dayContext.Provider value={dayData}>
      <userContext.Provider value={userData}>
      <todayContext.Provider value={todayDataState}>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<SignUpPage/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/habitos" element={<HabitsPage/>}/>
          <Route path="/historico" element={<History/>}/>
          <Route path="/historico/day/:date" element={<DayHistory/>}/>
        </Routes>
      </todayContext.Provider>
      </userContext.Provider>
      </dayContext.Provider>
    </BrowserRouter>
  )
}
