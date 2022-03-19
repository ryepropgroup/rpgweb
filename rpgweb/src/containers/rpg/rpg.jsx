import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StudentButtonImage from '../../assets/choice-page/student.jpg';
import SponsorButtonImage from '../../assets/choice-page/sponsor.jpg';
import TeamButtonImage from '../../assets/choice-page/team.jpg';


const RpgContainer = styled.div`
`;

const Student = styled.div`
    background-image: url(${StudentButtonImage});
    height: 33.34vh;
`
const Team = styled.div`
    background-image: url(${TeamButtonImage});
    height: 33.34vh;
`
const Sponsor = styled.div`
    background-image: url(${SponsorButtonImage});
    height: 33.34vh;
`

const StudentButtonContainer = styled.div`
    position: absolute;
    top: 16vh;
    left: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StudentButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    border: none;
    color: white;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #FFF 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    &:hover,
    &:active {
        // Slide animation for list item
        background-position: 100%;
        color: black; // Font color turns into background color
        transform: translateX(1rem);
    }
`
const TeamButtonContainer = styled.div`
    position: absolute;
    top: 48vh;
    left: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TeamButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    border: none;
    color: white;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #FFF 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    &:hover,
    &:active {
        // Slide animation for list item
        background-position: 100%;
        color: black; // Font color turns into background color
        transform: translateX(1rem);
    }
`
const SponsorButtonContainer = styled.div`
    position: absolute;
    top: 80vh;
    left: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SponsorButton = styled(motion.button)`
    display: flex;
    justify-content: center;
    border: none;
    color: white;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #FFF 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    &:hover,
    &:active {
        // Slide animation for list item
        background-position: 100%;
        color: black; // Font color turns into background color
        transform: translateX(1rem);
    }
`

{/* Render components */}
export function Rpg() {
    return (
        <RpgContainer>
            <Student>
                <StudentButtonContainer>
                    <StudentButton>I am a Student</StudentButton>
                </StudentButtonContainer>
            </Student>
            <Team>
                <TeamButtonContainer>
                    <TeamButton>I am a Team Member</TeamButton>
                </TeamButtonContainer>
            </Team>
            <Sponsor>
                <SponsorButtonContainer>
                    <SponsorButton>I am a Sponsor</SponsorButton>
                </SponsorButtonContainer>
            </Sponsor>
        </RpgContainer>
    )
};