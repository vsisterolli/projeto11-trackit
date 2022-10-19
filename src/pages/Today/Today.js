import Header from "../../components/Header"
import TodayHabit from "../../components/TodayHabit"
import axios from "axios"
import { todayContext, userContext } from "../../App"
import React, { useContext } from "react"
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
    const navigate = useNavigate();

    const [userTodayHabits, setUserTodayHabits] = React.useState([]);

    const headers = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    React.useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", headers);
        promise.then(response => {
            setUserTodayHabits(response.data);
            let aux = 0;
            for(let i = 0; i < userTodayHabits.length; i++)
                if(userTodayHabits[i].done) {
                    console.log("Oi");
                    aux++;
                }
            setCompleted([aux, userTodayHabits.length]);
        })
        promise.catch(() => navigate("/"));
    }, []);

    React.useEffect(() => {
        if(completed[0] === 0)
            setCompleteMessage("Nenhum hábito concluido ainda");
        else
            setCompleteMessage(`${Math.ceil(100 * completed[0]/userTodayHabits.length)}% dos hábitos concluídos`);
    },[completed])

    return (
        <>
        <Header/>
        <StyledTodayPage completed={completed}>
            <StyledHabitsPresentation>
                <h2>{days[now.day()]}, {now.format("DD/MM")}</h2>
                <h4>{completeMessage}</h4>
                {userTodayHabits.map(value=> <TodayHabit key={value.id} data={value}/>)}
            </StyledHabitsPresentation>
        </StyledTodayPage>
        <Footer/>
        </>
    )
}

