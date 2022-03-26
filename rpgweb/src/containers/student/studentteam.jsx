import React from 'react';
import styled from 'styled-components';
import { DropArrow } from '../../components/arrow/arrow';
import Picture from '../../assets/pictures/background-image.JPG';
import { motion } from 'framer-motion';
import { Element, scroller} from 'react-scroll';
import { StudentMenu } from '../../components/studentmenu/stumenu';

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

    @media (min-width: 1200px) {
        top: 1vh;
        right: 7vw;
    }
`

const TitleA = styled(motion.div)`
    position: absolute;
    left: 23.5vw;
    top: 6vh;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 3em;
        left: 20vw;
    }
`
const TitleCurated = styled(motion.div)`
    position: absolute;
    left: 26.5vw;
    top: 6vh;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 3em; 
        left: 23.5vw;
    }
`
const TitleTeam = styled(motion.div)`
    position: absolute;
    left: 40vw;
    top: 6vh;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 3em;
        left: 40vw;
    }
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
    
    @media (min-width: 1200px) {
        font-size: 4em;
        left: 27vw;
        top: 16vh;
    }
`
const Arrow = styled(Element)`
    position: absolute;
    top: 75vh;
    right: 50vw;
    display: flex;
    justify-content: center;

    @media (min-width: 1200px) {
        top: 58vh;
        right: 40vw;
    }

`
const LeadCard = styled(motion.div)`

`
const TeamCard = styled(motion.div)`

`
{/* Render components */}
export function StudentTeam() {

    const scrollNext = () => {
        scroller.scrollTo("teamcards", {smooth: true, duration: 1450});
    }

    return (
        <Teampage>
            <StudentTeamContainer>
                <StudentMenu/>
                <Title>
                    <TitleA>
                        A
                    </TitleA>
                    <TitleCurated>
                        Curated
                    </TitleCurated>
                    <TitleTeam>
                        Team
                    </TitleTeam>
                    <Title2>
                        Paving your Way into space
                    </Title2>
                    <Arrow onClick = {scrollNext}>
                        <DropArrow/>
                    </Arrow>
                </Title>
            </StudentTeamContainer>
            <StudentTeamCont2 name="teamcards">
                <LeadCard>
                </LeadCard>
            </StudentTeamCont2>
        </Teampage>
    )
};