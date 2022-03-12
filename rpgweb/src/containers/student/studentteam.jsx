import React from 'react';
import styled from 'styled-components';

const StudentTeamContainer = styled.div`

`;

const Background = styled.div`
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
        </StudentTeamContainer>
    )
};