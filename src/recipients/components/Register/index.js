import React, { useState, useContext } from 'react'
import styles from 'styled-components'
import { ArrowBack, Done } from '@material-ui/icons'
import { ThinHeader } from '../../../shared-components/Header'


const Container = styles.div`
    display: flex;
    justify-content: space-between;
    color: white;
    height: 100%;
    padding: 0 0.5em;
    > a {
        height: 100%;
        > svg {
            height: 100%;
        }
    }
`

const Register = () => {
    const renderBody = () => (
        <Container>
            <a><ArrowBack/></a>
            <a><Done/></a>
        </Container>
    )

    return <ThinHeader body={renderBody} />
}

export default Register