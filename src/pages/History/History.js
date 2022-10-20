import Header from "../../components/Header";
import { StyledHistory, Screen } from "./HistoryStyle";
import Footer from "../../components/Footer";
import { Calendar } from "react-calendar";

export default function History() {

    function tileClassName() {
        return "tile";
    }

    React.useEffect(() => {
        
    })

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
                    />
                </div>
            </Screen>
        </StyledHistory>
        <Footer setLoading={"don't load! user is in history page"}/>
        </>
    )
}



