import React, { useState, useContext } from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background: #ff6b6b;
    color: #222f3e;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
`

const CoverImage = styled.img`
    border: 3px solid #ccc;
    border-radius: 999px;
    height: 5rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const GenericBtn = styled.button`
    border-radius: 999px;
    border: 3px solid #ccc;
    height: 2rem;
    margin: 1rem;
    background: #fff;
`

const PotContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: space-around;

`

const Start = () => <Background>
        <CoverImage src='./images/maxresdefault.jpg' />
        <h2>Some guy</h2>
        <h3>age</h3>
        <PotContainer>
            <GenericBtn>Soup</GenericBtn>
            <GenericBtn>Shelter</GenericBtn>
            <GenericBtn>Suit</GenericBtn>
        </PotContainer>
        <GenericBtn className="donate-btn">DONATE</GenericBtn>
    </Background>

export default Start