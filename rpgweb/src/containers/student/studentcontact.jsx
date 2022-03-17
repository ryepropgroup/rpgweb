import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackPic from '../../assets/pictures/background-image.JPG';

const StudentContactContainer = styled.div`
    height: 100vh;
    background-image: url(${BackPic});
`;

const JoinUs = styled.div`
    position: absolute;
    top: 10vh;
`
const Title1 = styled(motion.div)`
    background: linear-gradient(180deg, #57FFDC 0%, #F3BD11 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 5em;
    font-family: poppins;
    margin-left: 150px;    
`
const Title2 = styled(motion.div)`
    background: linear-gradient(180deg, #57FFDC 0%, #F3BD11 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 64px;
    font-size: 64px;
    font-family: poppins;
    margin-left: 150px;
    font-weight: bold;
`


const Form = styled.div `
    position: absolute;
    top: 30vh;
    left: 55vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .formInputs{
        color: white;
        border: none;
        text-decoration: none;
        font-size: 24px;
        font-family: poppins;
    }

    .formEmailInputs{
        margin-bottom: 10px;
        border: none;
        text-decoration: none;
        font-size: 24px;
        color: white; 
        margin-right: 53px;
        font-family: poppins;
    }

    .messageInput{
        margin-bottom: 10px;
        border: none;
        text-decoration: none;
        font-size: 24px;
        margin-left: 240px;
        margin-top: 20px;
        color: white;
        font-family: poppins;
    }

    .inputs{
        border: none;
        background-color: transparent;
        resize: none;
        outline: none;
        font-size: 20px;
    }

    .messageField{
        display: flex;
        flex-direction: column;
        width:600px;
        height: 200px;
        font-size: 20px;
        border-color: red;
    }

    .submitButton{
        width: 150px;
        height: 50px;
        font-size: 20px;
        font-family: poppins;
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 50px;
        margin-right: 225px;
        margin-top: 50px;
        background: linear-gradient(90deg, #57FFDC 4.97%, #F3BD11 64.62%);
    }

    .Lines {
        margin-left: 230px;
        margin-top:0;
        color: white;
    }
`

{/* Render components */}
export function StudentContact() {
    return (
        <StudentContactContainer>

            <JoinUs>
                <Title1>
                    Interested In Our Work?
                </Title1>

                <Title2>
                    Join Us!
                </Title2>
            </JoinUs>

            <Form>
                <label className='formInputs'>
                    First Name: 
                    <input type="text" name="firstName" className="inputs" />
                </label>

                <p className="Lines">___________________________________________________________________________________________</p>
                
                <label className='formInputs'>
                    Last Name: 
                    <input type="text" name="lastName" className="inputs" />
                </label>

                <p className="Lines">___________________________________________________________________________________________</p>

                <label className='formEmailInputs'>
                    Email: 
                    <input type="text" name="email" className="inputs" />
                </label>

                <p className="Lines">___________________________________________________________________________________________</p>

                <label className='messageInput'>
                    Message: 
                    <textarea name="message" id="mssage" cols="30" rows="10" className="messageField"></textarea>
                </label>

                <button className="submitButton">Submit</button>

                
            </Form>
        </StudentContactContainer>
    )
};