import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Backpic from '../../assets/pictures/background-image.JPG';
import { StudentMenu } from '../../components/studentmenu/stumenu';

const StudentHomeContainer = styled.div`
    height: 100vh;
    background-image: url(${Backpic});
`;

const AboutUsParagraph1 = styled.div`
    font-family: poppins;
    color: white;
    white-space: pre-line;
    
    margin-left: 15%;
    margin-top: 15%;
    font-size: 22px;
`;

const AboutUsParagraph2 = styled.div`
    font-family: poppins;
    color: white;
    white-space: pre-line;

    font-size: 22px;
    margin-left: 65%;
    margin-top: 5%;
`;

const MeetOurTeam = styled.div`
    position: absolute;
    top: 75vh;
    left: 40vw;
    
    background-image: -webkit-linear-gradient(#57FFDC, #F3BD11);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: poppins;
    font-weight: bold;
    font-size: 3.6em;
`;

const FuelingFuture = styled(motion.div)`
    position: absolute;
    top: 20vh;
    left: 15vw;
    background-image: -webkit-linear-gradient(#57FFDC, #F3BD11);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: poppins;
    font-weight: bold;
    font-size: 4em;
`

{/* Render components */}
export function StudentHome() {
    return (
        <StudentHomeContainer>
            <StudentMenu />
            <FuelingFuture>
                Fueling Our Future
            </FuelingFuture>

            <AboutUsParagraph1>
                Ryerson Propulsion Group is A Student Design {"\n"}
                Team Aiming to Design, Build, And Test a Liquid {"\n"}
                Bipropellant Rocket Engine.
            </AboutUsParagraph1>
            <AboutUsParagraph2>
                RPG Consists of Members From Every Engineering {"\n"}
                Discpline Working on The Complex Challenges a {"\n"}
                Rocket Engine Presents.
            </AboutUsParagraph2>
            <Link to="/studentteam">
                <MeetOurTeam>
                    Meet Our Team
                </MeetOurTeam>
            </Link>
        </StudentHomeContainer>
    )
};