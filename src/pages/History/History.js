import Header from "../../components/Header";
import { StyledHistory, Screen } from "./HistoryStyle";
import Footer from "../../components/Footer";

export default function History() {
    return (
        <>
        <Header/>
        <StyledHistory>
            <Screen>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </Screen>
        </StyledHistory>
        <Footer setLoading={"don't load! user is in history page"}/>
        </>
    )
}



