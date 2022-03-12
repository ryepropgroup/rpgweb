import React from 'react';
import styled from 'styled-components';

const StudentContactContainer = styled.div`
    
`;

const Title1 = styled.div`
    background: linear-gradient(180deg, #57FFDC 0%, #F3BD11 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 64px;
    margin-top: 200px;
    margin-left: 150px;
    font-weight: bold;
    
`
const Title2 = styled.div`
    background: linear-gradient(180deg, #57FFDC 0%, #F3BD11 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 64px;
    font-size: 64px;
    margin-left: 150px;
    font-weight: bold;
`


const Form = styled.div `
    display: flex;
    flex-direction: column;
    margine-top: 20px;
    align-items: center;
    
    .formInputs{
        
        border: none;
        text-decoration: none;
        font-size: 24px;
    }

    .formEmailInputs{
        margin-bottom: 10px;
        border: none;
        text-decoration: none;
        font-size: 24px;
        margin-right: 53px;
    }

    .messageInput{
        margin-bottom: 10px;
        border: none;
        text-decoration: none;
        font-size: 24px;
        margin-left: 240px;
        margin-top: 20px;
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
        border-radius: 50px;
        margin-right: 225px;
        margin-top: 50px;
        background: linear-gradient(90deg, #57FFDC 4.97%, #F3BD11 64.62%);
    }

    .Lines {
        margin-left: 230px;
        margin-top:0;
    }
`

{/* Render components */}
export function StudentContact() {
    return (
        <StudentContactContainer>
            
            <Title1>
                Interested In Our Work?
            </Title1>

            <Title2>
                Join Us!
            </Title2>

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

                <button className="submitButton">submit</button>

                
            </Form>
        </StudentContactContainer>
    )
};