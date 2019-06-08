import React, { useContext, useState } from 'react'
import { Context } from '../../../Context'
import { ThinHeader } from '../../../shared-components/Header'
import styles from 'styled-components'
import { Link } from 'react-router-dom'

const PersonTab = styles.div`
    display: flex;
    flex-direction: row;
    justify-contents: center;
    margin: 0.5em;
    margin-left: 3em;

    h3 {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 0.5em;
        font-size: 1.2em;
        color: black;
    }     
`
const Page = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align:center;
    height: 100vh;
`

const Section = styles.div`
    display: flex;
    flex-direction: column;
    text-align:center;
    flex-grow: 1;
    justify-content: flex-start;
    text-align:center;
    height: 100vh;
    padding-top: 3rem;
    h2 {
        padding-bottom: 2rem;
    }
    input {
        border-radius: 3em;
    }
`

const TextInput = styles.input`
    width: 66%;
    margin-bottom: 1.25rem;
    padding: 1em;
    border: 1px solid grey;
    color: grey;
    outline: none;
    margin-left: 3em;
`

const Admin = () => {
    const [persons, setPerson] = useContext(Context)
    const [searchTerm, setSearchTerm] = useState('')


    const personTab = ({ name, image, id }, index) => {
        const Img = styles.img`
            background-image: url(${image});
            background-position: center;
            background-size: contain;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        `

        const Div = styles.div`
            background-color: grey;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            p {
                color: white;
                margin-top: -2px;
                font-weight: 600;
            }
        `

        return (
            <Link to={`/admin/${id}`}>
                <PersonTab key={index}>
                    {image ? <Img /> : <Div><p>{name.split('')[0]}</p></Div>}
                    <h3>{name}</h3>
                </PersonTab>
            </Link>
        )
    }

    return (
        <Page>
            <ThinHeader />
            <Section>
                <h2>Admin</h2>
                <TextInput
                    placeholder='search people...'
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)} />
                {persons.filter(_ => _.name.toLowerCase().includes(searchTerm.toLowerCase())).map((person, index) => personTab(person, index))}
            </Section>
        </Page>
    )
}

export default Admin