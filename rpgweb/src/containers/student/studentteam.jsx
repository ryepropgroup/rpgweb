import React from 'react';
import styled from 'styled-components';
import { DropArrow } from '../../components/arrow/arrow';
import Picture from '../../assets/pictures/background-image.JPG';
import { motion } from 'framer-motion';
import { Element, scroller} from 'react-scroll';
import { StudentMenu } from '../../components/studentmenu/stumenu';
import Umar from '../../assets/team-photos/umar-shabbir.jpg';
import Akbar from '../../assets/team-photos/akbar-khurram.jpg';
import Georgia from '../../assets/team-photos/georgia-jovanovic.jpg';
import Jack from '../../assets/team-photos/jack-sinclair.jpg';
import Karan from '../../assets/team-photos/karan-agrawal.jpg';
import Newsha from '../../assets/team-photos/newsha-mohammadzadeh.jpg';
import Orion from '../../assets/team-photos/orion-moore.jpg';
import Sidra from '../../assets/team-photos/sidra-sayed.png';
import Toni from '../../assets/team-photos/toni-pano.jpg';
import William from '../../assets/team-photos/william-pirie.png';

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

const LeadCardimage = styled(motion.div)`
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    
    @media (min-width: 1600px) {
        top: 115vh;
        left: 25vw;
    }

    .umar-pic {
        @media (min-width: 1600px) {
            height: 470px;
            width: 350px;
            border-radius: 10%;
        }
    }
`
const Leadcardtitle = styled(motion.div)`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    position: absolute;

    @media (min-width: 1600px) {
        font-size: 5em;
        top: 116vh;
        left: 42vw;
    }
`
const LeadcardName = styled(motion.div)`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    position: absolute;

    @media (min-width: 1600px) {
        font-size: 3em;
        top: 125vh;
        left: 42.3vw;
    }
`
const LeadcardDescription = styled(motion.div)`
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    position: absolute;
    font-style: italic;

    @media (min-width: 1600px) {
        font-size: 1.5em;
        top: 130vh;
        left: 42vw;
    }
`
const Gridcontainer = styled.div`
    display: flex;

`

const GridContainerrow = styled.div`
    display: flex;
`
const Jackcard = styled(motion.div)`

    .jack-pic {
        @media (min-width: 1600px) {
            height: 300px;
            width: 400px;
        }
    }

    .jack-name {
        color: white;
        font-family:'Poppins', sans-serif;
    }
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
                <LeadCardimage>
                    <img className="umar-pic" src={Umar} />
                </LeadCardimage>
                <Leadcardtitle>
                    Team Director
                </Leadcardtitle>
                <LeadcardName>
                    Umar Shabbir - 4th Year
                </LeadcardName>
                <LeadcardDescription>
                    Aerospace Engineering
                </LeadcardDescription>
                <Gridcontainer>
                    <GridContainerrow>
                        <Jackcard>
                            <img className="jack-pic" src={Jack} />
                            <div className="jack-name">
                                Jack Sinclair
                            </div>
                            <div className="jack-title">
                                Engineering
                            </div>
                        </Jackcard>
                    </GridContainerrow>
                </Gridcontainer>
            </StudentTeamCont2>
        </Teampage>
    )
};