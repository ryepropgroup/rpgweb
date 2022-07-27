import React from 'react';
import styled from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowContainer = styled.div`
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ArrowIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    color: black;
    background-color: white;
    font-size: 2rem;
    border-radius: 1000000%;
    padding: 0.2em 0.4em 0.2em 0.4em;
    background-image: linear-gradient(
        90deg,
        transparent 0%,
        transparent 50%
    );
    transition: all 0.4s;
    &:hover,
    &:active {
        background-position: 100%;
        background-color: black;
        color: #F3BD11;
        transform: translateY(-1rem);
    }
`;

export function DropArrow() {
    return (
        <ArrowContainer>
            <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown} />
            </ArrowIcon>
        </ArrowContainer>
    )
};