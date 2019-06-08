import React, { useState, useContext, Fragment } from 'react'
import styles from 'styled-components'
import { ArrowBack, Done } from '@material-ui/icons'
import { ThinHeader } from '../../../shared-components/Header'
import Input from '../../../shared-components/Input'
import { Link } from 'react-router-dom'


const Container = styles.div`
    display: flex;
    justify-content: space-between;
    color: white;
    height: 100%;
    padding: 0 0.5em;
    > a {
        height: 100%;
        color: white;
        > svg {
            height: 100%;
        }
    }
`

const H3 = styles.p`
    padding: 0em 0.6em 0;
    margin-top: 1em;
    margin-bottom: -1em;
    color: grey;
    font-size: 1em;
`

const Form = styles.form`
    display: flex;
    height: 100vh;
    flex-direction: column;
`

const Section = styles.section`
padding: 1em 3em 0;
    margin-bottom: -1em;
    color: grey;
    font-size: 1em;
    flex-grow: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
`

const HiddenImageUpload = styles.input`
    display: hidden;
    height: 0px;
    width: 0px;
    overflow: none;
`

const Register = () => {
    const renderBody = () => (
        <Container>
            <Link to={`/login`}><ArrowBack /></Link>
            <Link to={`/login`}><Done /></Link>
        </Container>
    )

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pin, setPin] = useState('')
    const [image, setImage] = useState()

    const StyledButton = styles.button`
        height: 150px;
        width: 150px;
        border: none;
        border-radius: 50%;
        margin: 0 auto;
        border: 1px solid grey;
        color: grey;
        background-color: white;
        cursor: pointer;
        background-image: url(${image});
        background-size: contain;
        outline: none;

        &:hover {
            border: 1px solid black;
            color: black;
        }
    `


    const onButtonClick = event => {
        event.preventDefault()
        document.getElementById('imageUpload').click();
    }

    const onFileChange = event => {
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = function () {
            setImage(reader.result)
        }
    }

    return (
        <Form>
            <ThinHeader body={renderBody} />
            <Section>
                <HiddenImageUpload id='imageUpload' type='file' onChange={event => onFileChange(event)} />
                <StyledButton onClick={onButtonClick}>{!image ? 'Add image' : ''}</StyledButton>
                <Input label='Name' icon={() => { }} value={name} onChange={setName} />
                <Input label='Age' icon={() => { }} value={age} onChange={setAge} />
                <H3>Optional infomation</H3>
                <Input label='Email' icon={() => { }} value={email} onChange={setEmail} />
                <Input label='Phone number' icon={() => { }} value={phone} onChange={setPhone} />
                <Input label='4 digit PIN' icon={() => { }} value={pin} onChange={setPin} />
            </Section>
        </Form>
    )
}

export default Register