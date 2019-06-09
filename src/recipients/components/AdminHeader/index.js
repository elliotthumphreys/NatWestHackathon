import React from 'react'
import { ThinHeader } from '../../../shared-components/Header'
import styles from 'styled-components'

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
    input {
        border-radius: 3em;
    }
    h3 {
        border-bottom: 1px solid rgba(0,0,0, 0.1);
        padding-bottom: 1.5em;
        margin: 0 3em 1.5em;
    }
    a {
        cursor: pointer;
        color: black;
        margin: 0.5em 0;
    }
`

const AdminHeader = ({children, person: {image, name}}) => {

    const Img = styles.img`
            background-image: url(${image});
            background-position: center;
            background-size: contain;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin: 1em auto;
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
        margin: 1em auto;
    `

    return (
        <Page>
            <ThinHeader />
            <Section>
                <h2>Admin</h2>
                {image ? <Img /> : <Div><p>{name.split('')[0]}</p></Div>}
                <h3>{name}</h3>
                {children}
            </Section>
        </Page>
    )
}

export default AdminHeader