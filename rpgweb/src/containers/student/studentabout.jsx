import React from 'react';
import styled from 'styled-components';
import { StudentMenu } from '../../components/studentmenu/stumenu';
import BackPic from '../../assets/pictures/background-image.JPG';

const StudentAboutContainer = styled.div`
    height: 100vh;
    background-image: url(${BackPic});
`;

{/* Render components */}
export function StudentAbout() {
    return (
        <StudentAboutContainer>
            <StudentMenu/>
            
        </StudentAboutContainer>
    )
};