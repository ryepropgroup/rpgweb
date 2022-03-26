import React from 'react';
import styled from 'styled-components';
import { StudentMenu } from '../../components/studentmenu/stumenu';
import BackPic from '../../assets/pictures/background-image.JPG';

import TeamPic from '../../assets/team-photos/teamPhoto.JPG';

const StudentAboutContainer = styled.div`
    height: 100vh;
    background-image: url(${BackPic});
`;

const TeamPicture = styled.div`
    background-image: url(${TeamPic});
    background-size: cover;
    height: 600px;
    width: 1068px;
    
    
    position: absolute;
    top: 40vh;

    left: 24vw;

`;

const OurMilestones = styled.div`
    position: absolute;
    top: 10vh;
    left: 7vw;
    
    background-image: -webkit-linear-gradient(#57FFDC, #F3BD11);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: poppins;
    font-weight: bold;
    font-size: 3.6em;
`;

const WeStriveToLead = styled.div`
    position: absolute;
    top: 50vh;
    left: 30vw;
    
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
    margin-left: 9vw;
    margin-top: 10vh;
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
                At RPG We've established {"\n"}
                A Community Of Driven {"\n"}
                Students
            </Heading1>

            <TeamPicture>

            </TeamPicture>

            <WeStriveToLead>
                We Strive To Lead Innovation
            </WeStriveToLead>
            
        </StudentAboutContainer>
    )
};