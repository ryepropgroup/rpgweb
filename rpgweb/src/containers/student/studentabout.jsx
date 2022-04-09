import React from 'react';
import styled from 'styled-components';
import { StudentMenu } from '../../components/studentmenu/stumenu';
import BackPic from '../../assets/pictures/background-image.JPG';
import Team from '../../assets/team-photos/teamPhoto.JPG';

const StudentAboutContainer = styled.div`
    height: 500vh;
    background-image: url(${BackPic});
`;

const TeamPicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 55vh;

    .teamPic {
        height: 600px;
        width: 1050px;
        border-radius: 5% / 10%;
    }
`;

const OurMilestones = styled.div`
    position: absolute;
    top: 25vh;
    left: 7vw;
    background-image: -webkit-linear-gradient(#57FFDC, #F3BD11);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3.6em;
`;

const WeStriveToLead = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 65vh;
    
    background-image: -webkit-linear-gradient(#57FFDC, #F3BD11);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: poppins;
    font-weight: bold;
    font-size: 3.6em;
`;

const Heading1 = styled.div`
    font-family: poppins;
    color: white;
    white-space: pre-line;

    position: absolute;
    font-size: 25px;
    margin-left: 7.5vw;
    margin-top: 28vh;
`;

const EngInfo = styled.div`
    display: flex;
    justify-content: left;
    text-align: left;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1.7em;
    margin: 80vh 0 0 8vw;
`;

{/* Render components */}
export function StudentAbout() {
    return (
        <StudentAboutContainer>
            <StudentMenu/>

                <OurMilestones>
                    Our Milestones
                </OurMilestones>


                <Heading1>
                    At RPG We've established<br/>
                    A Community Of Driven<br/>
                    Students
                </Heading1>

                <TeamPicture>
                    <img className="teamPic" src={Team}/>
                </TeamPicture>

            <WeStriveToLead>
                We Strive To Lead Innovation
            </WeStriveToLead>

            <EngInfo>
                Applied Systems Engineering To Real-World Design.<br/><br/>
                Explored New Uses For Additive Manufacturing<br/><br/>
                Produced A Rocket Engine Design, <br/> Ready For Implementation!
            </EngInfo>
            
        </StudentAboutContainer>
    )
};