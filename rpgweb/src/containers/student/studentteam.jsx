import React from 'react';
import styled from 'styled-components';
import { DropArrow } from '../../components/arrow/arrow';
import Picture from '../../assets/pictures/background-image.JPG';
import { motion } from 'framer-motion';
import { Element, scroller} from 'react-scroll';
import { StudentMenu } from '../../components/studentmenu/stumenu';
import Umar from '../../assets/team-photos/umar-shabbir.jpg';

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

    @media (min-width: 1600px) {
        
    }
`

const TitleA = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 3em;
        left: 20vw;
    }

    @media (min-width: 1600px) {
        font-size: 5em;
        left: 32vw;
        top: 8vh;
    }
`
const TitleCurated = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 3em; 
        left: 23.5vw;
    }

    @media (min-width: 1600px) {
        left: 35vw;
        top: 8vh;
        font-size: 5em;
    }
`
const TitleTeam = styled(motion.div)`
    position: absolute;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 5em;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 3em;
        left: 40vw;
    }

    @media (min-width: 1600px) {
        left: 49vw;
        top: 8vh;
        font-size: 5em;
    }
`

const Title2 = styled.div`
    position: absolute;
    display: flex;
    margin-top: -1vh;
    justify-content: center;
    color: #F3BD11;
    font-weight: bold;
    font-family: poppins;

    @media (min-width: 1200px) {
        font-size: 4em;
        left: 27vw;
        top: 16vh;
    }

    @media (min-width: 1600px) {
        font-size: 5em;
        top: 17vh;
        left: 44vw;
    }
`
const Arrow = styled(Element)`
    position: absolute;
    top: 75vh;
    right: 50vw;
    display: flex;
    justify-content: center;

    @media (min-width: 1200px) {
        top: 73vh;
        right: 40vw;
    }
`

const LeadCard = styled(motion.div)`
    position: absolute;
    max-width: 100%;
    max-height: 100%;

    .umar-pic {
        height: 400px;
        width: 600px;
    }
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
                    <img className="umar-pic" src={Umar} />
                </LeadCard>
            </StudentTeamCont2>
        </Teampage>
    )
};