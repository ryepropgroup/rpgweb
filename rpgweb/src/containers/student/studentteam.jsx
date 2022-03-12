import React from 'react';
import styled from 'styled-components';
import {StarPic} from '../../assets/pictures/background-image.JPG';


const StudentTeamContainer = styled.div`

`;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
`
const Title1 = styled.div`
    display: flex;
    justify-content: center;
    color: black;
`

const Title2 = styled.div`
    display: flex;
    justify-content: center;
    color: #F3BD11;
`

{/* Render components */}
export function StudentTeam() {


    return (
        <StudentTeamContainer>
            <Title1>
                A Curated Team
            </Title1>
            <Title2>
                Paving your Way into space
            </Title2>

            <Background>
                <img src={require("../../assets/pictures/background-image.JPG")} />
            </Background>
        </StudentTeamContainer>
    )
};