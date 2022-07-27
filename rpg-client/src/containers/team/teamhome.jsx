import React from 'react';
import styled from 'styled-components';
import Backpic from '../../assets/pictures/background-image.JPG';

const TeamhomeContainer = styled.div`
    height: 100vh;
    background-image: url(${Backpic});
`
export function TeamHome() {
    return (
        <TeamhomeContainer>

        </TeamhomeContainer>
    )
}