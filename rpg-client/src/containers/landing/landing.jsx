import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import LandingBack from '../../assets/landing-page/rpg-landing-desktop.jpg';
import Logo from '../../assets/animated-logo/mainlogo.svg';


const LandingContainer = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    background-image: url(${LandingBack});
    background-size: cover;
    background-repeat: no-repeat;
`;

const Logocontainer = styled.div`
    position: absolute;
    left: 34vw;
    top: 15vh;
`

const RPGlogo = styled(motion.div)`
    display: flex;
    @media (min-width: 1200px) {
        height: 20em; 
    }

    @media (min-width: 1600px) {
        height: 40em;
    }

`

const ButtonContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 75vh 0 0 0;
`;

const StartButton = styled(motion.button)`
    width: 135px;
    height: 60px;
    padding: 10px;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    transition: all 0.5s ease;

    &:hover {
        background-color: black;
        color: #57FFDC;
    }
`;

{/* Render components */}
export function Landing() {
    return(
        <LandingContainer>
            <Logocontainer>
                <RPGlogo>
                    <img src={Logo} />
                </RPGlogo>
            </Logocontainer>
            
            <ButtonContainer>
                <Link to="/rpg">
                    <StartButton
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition = {{delay:1, duration: 1.2}}
                    >
                        Start Here
                    </StartButton>
                </Link>
            </ButtonContainer>
        </LandingContainer>
    )
};