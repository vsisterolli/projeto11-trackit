import styled from "styled-components";
import { UsualHeaderedPage } from "../assets/styles/UsualHeaderedPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UsualMobileScreen } from "../assets/styles/UsualMobileScreen";

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
        <Footer setLoading={"aoba"}/>
        </>
    )
}

const StyledHistory = styled(UsualHeaderedPage)`
`;

const Screen = styled(UsualMobileScreen)`
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`

