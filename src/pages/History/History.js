import Header from "../../components/Header";
import { StyledHistory, Screen } from "./HistoryStyle";
import Footer from "../../components/Footer";
import { Calendar } from "react-calendar";
import React from "react";
import axios from "axios";
import { dayContext, userContext } from "../../App";
import { useContext } from "react";
import { BASE_URL } from "../../assets/constants/constants";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";


export default function History() {

    const [habitsByDay, setHabitsByDay] = React.useState({});
    const navigate = useNavigate();
    const [day, setDay] = useContext(dayContext)

    function goToDay(date) {
        const thisDate = dayjs(date).format("DD/MM/YYYY");
        if(habitsByDay[thisDate] !== undefined) {
            setDay(habitsByDay[thisDate])
            navigate(`/historico/day/${thisDate.replaceAll("/", "")}`)
        }
    }

    function tileClassName({date, view}) {
        const today = dayjs();
        const tileDay = dayjs(date);
        if(tileDay.format("DD/MM/YYYY") === today.format("DD/MM/YYYY") ) 
            return "yellow";
        else if(JSON.stringify(habitsByDay) !== "{}") {
            const thisDay = tileDay.format("DD/MM/YYYY");
            if(habitsByDay[thisDay] !== undefined) {
                let doneAll = true;
                habitsByDay[thisDay].map((value) => {if(!value.done) doneAll = false})
                return (doneAll ? "green" : "red");
            }
            return "";
        }
    }

    const user = useContext(userContext)[0];
    const headers = {
        "headers": {
            "Authorization": `Bearer ${user.token}`
        }
    }

    React.useEffect(() => {
        if(JSON.stringify(user) === "{}")
            return;
        const promise = axios.get(BASE_URL + "habits/history/daily", headers)
        promise.then(response => {
            const newObj = {};
            const aux = response.data;
            for(let i = 0; i < aux.length; i++)
                newObj[aux[i].day] = aux[i].habits;
            setHabitsByDay(newObj);
        })
        .catch((e) => console.log(e));


    }, [user])

    return (
        <>
        <Header/>
        <StyledHistory>
            <Screen>
                <h1>Histórico</h1>
                <div className="calendar-container">
                    <Calendar
                    className="calendar"
                    locale="pt-br"
                    tileClassName={tileClassName}
                    onClickDay={(value) => goToDay(value)}
                    />
                </div>
            </Screen>
        </StyledHistory>
        <Footer loading={undefined} setLoading={(aux) => {}} />
        </>
    )
}



