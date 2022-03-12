import React from 'react';
import styled from 'styled-components';
import Picture from '../../assets/pictures/background-image.JPG';


const StudentTeamContainer = styled.div`
    background-image: linear-gradient(#57FFDC, black);
    width: 100%;
    height: 100vh;
`;

const Title = styled.div`
    position: relative;
    top: 5vh;
`

const Title1 = styled.div`
    position: relative;
    right: 10vw;
    top: 6vh;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;
`

const Title2 = styled.div`
    position: relative;
    top: 5vh;
    display: flex;
    margin-top: -1vh;
    justify-content: center;
    color: #F3BD11;
    font-weight: bold;
    font-family: poppins;
    font-size: 5em;
`
const Arrow = styled.button`
    display: flex;
    justify-content: center;
`

{/* Render components */}
export function StudentTeam() {


    return (
        <StudentTeamContainer>
           <Title>
               <Title1 >
                A Curated Team
                </Title1>
                <Title2>
                Paving your Way into space
                </Title2>
            </Title>
            
        </StudentTeamContainer>
    )
};