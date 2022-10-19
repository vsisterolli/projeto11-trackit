import Header from "../../components/Header"
import TodayHabit from "../../components/TodayHabit"
import axios from "axios"
import { todayContext, userContext } from "../../App"
import React, { useContext } from "react"
import { BASE_URL } from "../../assets/constants/constants"
import dayjs from "dayjs"
import Footer from "../../components/Footer"
import { StyledTodayPage, StyledHabitsPresentation } from "./Todaycss"
import { useNavigate } from "react-router-dom"

export default function Today() {

    const user = useContext(userContext);
    const [completed, setCompleted] = useContext(todayContext);

    const now = dayjs();
    const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-feira", "Sábado"];
    const [completeMessage, setCompleteMessage] = React.useState("Nenhum hábito concluído ainda");
    const [newMarked, setNewMarked] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const [userTodayHabits, setUserTodayHabits] = React.useState([]);

    const headers = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    React.useEffect(() => {
        let aux = 0;
        for(let i = 0; i < userTodayHabits.length; i++)
            if(userTodayHabits[i].done) 
                aux++;
        setCompleted([aux, userTodayHabits.length]);
    }, [userTodayHabits])

    React.useEffect(() => {
        if(completed[0] === 0)
            setCompleteMessage("Nenhum hábito concluido ainda");
        else
            setCompleteMessage(`${Math.ceil(100 * completed[0]/userTodayHabits.length)}% dos hábitos concluídos`);
    },[completed])


    function loadDailyHabits() {
        setLoading(true);
        const promise = axios.get(BASE_URL + "habits/today", headers);
        promise.then(response => {setLoading(false); setUserTodayHabits(response.data)})
        promise.catch(() => navigate("/"));
    }
    React.useEffect(loadDailyHabits, []); 
    
    return (
        <>
        <Header/>
        <StyledTodayPage completed={completed}>
            <StyledHabitsPresentation>
                <h2 data-identifier="today-infos">{days[now.day()]}, {now.format("DD/MM")}</h2>
                <h4 data-identifier="today-infos">{completeMessage}</h4>
                {userTodayHabits.map(value=> <TodayHabit setLoading={setLoading} loading={loading} loadDailyHabits={loadDailyHabits} userTodayHabitsSize={userTodayHabits.length} key={value.id} data={value}/>)}
            </StyledHabitsPresentation>
        </StyledTodayPage>
        <Footer newMarked={newMarked} setLoading={setLoading} loading={loading}/>
        </>
    )
}

