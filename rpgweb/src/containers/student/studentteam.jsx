import React from 'react';
import styled from 'styled-components';
import { DropArrow } from '../../components/arrow/arrow';
import Picture from '../../assets/pictures/background-image.JPG';

const Teampage = styled.div`

`
const StudentTeamContainer = styled.div`
    background-image: linear-gradient(#57FFDC, black);
    width: 100%;
    height: 100vh;
`;

const StudentTeamCont2 = styled.div`
    background-image: url(${Picture});
    height: 100vh;
`
const Title = styled.div`
    position: relative;
    width: 100%;
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
    position: absolute;
    top: 13vh;
    left: 33vw;
    display: flex;
    margin-top: -1vh;
    justify-content: center;
    color: #F3BD11;
    font-weight: bold;
    font-family: poppins;
    font-size: 5em;
`
const Arrow = styled.div`
    position: absolute;
    top: 75vh;
    right: 50vw;
    display: flex;
    justify-content: center;

`

{/* Render components */}
export function StudentTeam() {
    return (
        <Teampage> 
            <StudentTeamContainer>
                <Title>
                    <Title1>
                        A Curated Team
                    </Title1>
                    <Title2>
                        Paving your Way into space
                    </Title2>
                    <Arrow>
                        <DropArrow/>
                    </Arrow>
                </Title>
            </StudentTeamContainer>
            <StudentTeamCont2>
            </StudentTeamCont2>
        </Teampage>
    )
};