import styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../App";

export default function Header() {

    const userData = useContext(userContext);

    return(
        <>
        <StyledHeader data-identifier="avatar" image={userData.image}>
            <h1>TrackIt</h1>
            <img src={userData.image} alt="user profile picture"/>
        </StyledHeader>
        <FakeHeader/>
        </>
    )
}

const FakeHeader = styled.header`
    height: 70px;
`

const StyledHeader = styled.header`

    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    
    height: 70px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    
    img {
        height: 51px;
        width: 51px;
        border-radius: 98.5px;
    }

`