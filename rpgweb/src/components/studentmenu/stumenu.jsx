import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 6em;
`;

// Nav Colors
const NavColors = {
    NavDark: "#57FFDC",
    navLight: "#57FFDC",
};

// Hamburger icon circle
const NavTouch = styled.div`
    background-color: ${NavColors.navLight};
    top: 0.5em;
    right: 0.5em;
    width: 4.3em;
    height: 4.3em;
    border-radius: 50%;
    z-index: 1000;
    margin: 3.4vh 2.5vw 0px 0px;
    // box-shadow: 0 0.1rem 0.5rem rgb(93, 109, 126);
    cursor: pointer;
    overflow-y: hidden;
`;

// Container holds 6site logo and nav menu
const NavLogoContainer = styled.div`
    margin: 2.5vh 0px 0px 2.5vw;
    cursor: pointer;
`;

// Nav background animation
const NavBackground = styled.div`
    position: fixed;
    overflow: hidden;
    background-image: radial-gradient(
        ${NavColors.NavDark},
        ${NavColors.navLight}
    );
    top: 20em;
    right: -10em;
    width: 1em;
    height: 1em;
    z-index: 600;
    border-radius: 10%;
    margin: 3.4vh 2.5vw 0px 0px;
    transform: ${props => props.clicked? "scale(80)":"scale(0)"};
    transition: transform 0.9s;
`;

// Hamburger icon w/ animations
const NavIcon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked ? "transparent" : "black")};
    width: 2em;
    height: 4.8px;
    display: inline-block;
    margin: 32px 0px 0px 17.5px;
    transition: all 0.3s;
    border-radius: 500px;
    cursor: pointer;
    &::before,
    &::after {
        content: "";
        background-color: black;
        width: 2em;
        height: 4.8px;
        display: inline-block;
        border-radius: 500px;
        position: absolute;
        left: 0;
        transition: all 0.3s;
    }
    // Top line of hamburger
    &::before {
        top: ${(props) => (props.clicked ? "0" : "-0.6em")};
        transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")}; // After rotates 135deg : Before stays at 0 deg
    }
    // Bottom line of hamburger
    &::after {
        top: ${(props) => (props.clicked ? "0" : "0.6em")};
        transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
    // Hover animation narrows hamburger icon
    ${NavTouch}:hover &::before {
        top: ${(props) => (props.clicked ? "0" : "-1rem")};
    }
    ${NavTouch}:hover &::after {
        top: ${(props) => (props.clicked ? "0" : "1rem")};
    }
`;

// Nav menu
const Nav = styled.nav`
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")}; // After : Before animation for nav menu width
    opacity: ${(props) => (props.clicked ? "1" : "0")}; // After : Before animation for nav menu opacity
    transition: width 0.8s, opacity 0.8s;
`;

// Nav unordered list
const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    list-style: none;
    top: 50%;
    left: 81.5%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 240%;
`;

// Styling "Link" from react-router-dom acting as list item
const NavList = styled(Link)`
    display: inline-block;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: black;
    padding: 1rem 2rem;
    // Hover animation for list item
    background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #000 50%
    );
    background-size: 240%;
    transition: all 0.4s;
    &:hover,
    &:active {
        // Slide animation for list item
        background-position: 100%;
        color: ${NavColors.NavDark}; // Font color turns into background color
        transform: translateX(1rem);
    }
`;


export function StudentMenu() {
    
    const [click, setClick] = useState(false);
    const navClick = () => setClick(!click);

    return (
        <NavContainer>
            <NavLogoContainer>
            </NavLogoContainer>

            <NavTouch onClick={navClick}>
                <NavIcon clicked={click}>&nbsp;</NavIcon>
            </NavTouch>
            <NavBackground clicked={click}>&nbsp;</NavBackground>

            <Nav clicked={click}>
                <List>

                    <li>
                        <NavList onClick={navClick} to="/rpg">
                            RPG
                        </NavList>
                    </li>

                    <li>
                        <NavList onClick={navClick} to="/studenthome">
                            Home
                        </NavList>
                    </li>

                    <li>
                        <NavList onClick={navClick} to="/studentabout">
                            About
                        </NavList>
                    </li>

                    <li>
                        <NavList onClick={navClick} to="/studentteam">
                            Team
                        </NavList>
                    </li>

                    <li>
                        <NavList onClick={navClick} to="/studentevents">
                            Events
                        </NavList>
                    </li>

                    <li>
                        <NavList onClick={navClick} to="/studentblog">
                            Blog
                        </NavList>
                    </li>

                    <li>
                        <NavList onClick={navClick} to="/studentcontact">
                            Contact Us
                        </NavList>
                    </li>
                </List>
            </Nav>
        </NavContainer>
    )

};