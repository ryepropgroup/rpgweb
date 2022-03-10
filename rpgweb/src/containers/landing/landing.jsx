import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
    display: flex;
    position: relative;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 75vh 0 0 0;
`;

const StartButton = styled.button`
    width: 135px;
    height: 60px;
    padding: 10px;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
`;

{/* Render components */}
export function Landing() {
    return(
        <LandingContainer>
            <ButtonContainer>
                <Link to="/rpg">
                    <StartButton>
                        Start Here
                    </StartButton>
                </Link>
            </ButtonContainer>
        </LandingContainer>
    )
};