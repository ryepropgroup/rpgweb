import React from 'react';
import styled from 'styled-components';
import { StudentMenu } from '../../components/studentmenu/stumenu';
import BackPic from '../../assets/pictures/background-image.JPG';

const StudentAboutContainer = styled.div`
    height: 100vh;
    background-image: url(${BackPic});
`;

const OurMilestones = styled.div`
    position: absolute;
    top: 15vh;
    left: 15vw;
    
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

    font-size: 25px;
    margin-left: 15%;
    margin-top: 10%;
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

            <WeStriveToLead>
                We Strive To Lead Innovation
            </WeStriveToLead>
            
        </StudentAboutContainer>
    )
};