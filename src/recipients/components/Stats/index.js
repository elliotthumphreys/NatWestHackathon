import React, { useContext } from 'react'
import AdminHeader from '../AdminHeader'
import { Context } from '../../../Context'
import Input from '../../../shared-components/Input'
import Interaction from 'react-minimal-pie-chart'
import { style } from '@material-ui/system';
import styles from 'styled-components'


const colors = ['#F1C47B', '#F4DC7B', '#5FC2D1', '#f67979']

const Section = styles.section`
    width: 80%;
    margin: 0 auto;
`

const Div = styles.div`
    margin-top: 1em
p {
    text-align: left;
}    
span: {
        width: 10px;
        height: 10px;
    }
`

const Stats = ({ match: { params: { id } } }) => {
    const [persons, setPersons] = useContext(Context)
    const pots = persons.find(_ => _.id === id).pots

    const data = pots.map((pot, index) => {
        return {
            title: pot.name,
            value: pot.amount,
            color: colors[index % 4]
        }
    })

    const getKeys = pots.map((pot, index) => {
        const Span = styles.span`
                background-color: ${colors[index % 4]}
                display: inline-block;
                padding: 0.5em;
                margin-right: 1em;
                border-radius: 50%;
        `

        return <Div>
            <p><Span />{pot.name}</p>
        </Div>
    })

    return (
        <AdminHeader person={persons.find(_ => _.id === id)}>
            <Section>
                <Interaction data={data} />
                {getKeys}
            </Section>
        </AdminHeader>
    )
}

export default Stats