import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { UsualHeaderedPage } from "../../assets/styles/UsualHeaderedPage"
import { UsualMobileScreen } from "../../assets/styles/UsualMobileScreen"
import { dayContext } from "../../App"
import React, { useContext } from "react"
import styled from "styled-components"
import SpecificDayHabit from "../../components/SpecificDayHabit"
import { useNavigate } from "react-router-dom"

export default function DayHistory() {
    const habits = useContext(dayContext)[0];
    const navigate = useNavigate();
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        if(habits[0] === undefined) 
            navigate("/historico")
        else {
            let aux = 0;
            for(let i = 0; i < habits.length; i++)
                aux += (habits[i].done === true);
            setTotal(aux);
        }
    }, [])

    return(
        <>
            <Header/>
            <StyledDayPage done={habits.length === total}>
                <UsualMobileScreen>
                    <h4>{(total === habits.length ? "Parabéns! Você conseguiu terminar todos os seus hábitos nesse dia." : 
                    `${habits.length -total} habito(s) não foram concluído(s) nesse dia.`)}</h4>
                    {habits.map((value, index) => <SpecificDayHabit key={index} data={value}/>)}
                </UsualMobileScreen>
            </StyledDayPage>
            <Footer loading={undefined} setLoading={() => {}}/> 
        </>
    )
}

const StyledDayPage = styled(UsualHeaderedPage)`
    h4 {
        margin-bottom: 10px;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.done ? "#8FC549" : "black"};
    }
`