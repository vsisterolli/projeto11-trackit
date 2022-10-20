import Header from "../../components/Header";
import HabitCreation from "../../components/HabitCreation";
import React, { useContext } from "react";
import Footer from "../../components/Footer";
import Habit from "../../components/Habit";
import axios from "axios";
import { BASE_URL } from "../../assets/constants/constants";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { StyledTodayPage, StyledHabitsPresentation, StyledUsualButton } from "./HabitsPageStyle";

export default function HabitsPage() {
    
    const [creating, setCreating] = React.useState(false);
    const [habits, setHabits] = React.useState([])
    const [excludedHabits, setExcludedHabits] = React.useState(0);
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();

    const headers = {
        "headers": {
            "Authorization": `Bearer ${user.token}`
        }
    }
    React.useEffect(() => {
        if(JSON.stringify(user) === "{}")
            return;
        axios.get(BASE_URL + "habits", headers)
        .then(response => setHabits(response.data))
        .catch((e) => console.log(e))
    }, [user, excludedHabits])

    return (
        <>
        <Header/>
        <StyledTodayPage habitsSize={habits.length}>    
            <StyledHabitsPresentation>
                <div className="container">
                    <h2>Meus hábitos</h2>
                    <StyledUsualButton data-identifier="create-habit-btn" onClick={() => setCreating(!creating)}>+</StyledUsualButton>
                </div>
                <HabitCreation excludedHabits={excludedHabits} setExcludedHabits={setExcludedHabits} creating={creating} setCreating={setCreating}/>
                {habits.map((value, index) => <Habit setExcludedHabits={setExcludedHabits} excludedHabits={excludedHabits} key={index} data={value}/>)}
                <h4 data-identifier="no-habit-message" >Você não tem nenhum hábito cadastrado ainda.<br/>Adicione um hábito para começar a trackear!</h4>
            </StyledHabitsPresentation>
            <Footer loading={undefined} setLoading={(aux) => console.log("Oi")} newDeleted={excludedHabits}/>
        </StyledTodayPage>
        </>
    )
}

