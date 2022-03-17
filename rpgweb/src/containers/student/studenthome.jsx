import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Backpic from '../../assets/pictures/background-image.JPG';

const StudentHomeContainer = styled.div`
    height: 100vh;
    background-image: url(${Backpic});
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
            <FuelingFuture>
                Fueling Our Future
            </FuelingFuture>
        </StudentHomeContainer>
    )
};