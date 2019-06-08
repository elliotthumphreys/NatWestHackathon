import React, { useState, useContext } from 'react'
import { PermIdentity, Lock } from '@material-ui/icons'
import Input from '../../../shared-components/Input'
import Button from '../../../shared-components/Button'
import Header from '../../../shared-components/Header'


const Login = () => {
    const [username, setUsername] = useState('')
    const [pin, setPin] = useState('')

    return (
        <div className="Login">
            <header>
                <Header/>
                <div>
                    <Button label='Sign in' className='white-button-pink-background' link='/login'/>
                    <Button label='Sign up' className='white-button-pink-background' link='/register'/>
                </div>
            </header>
            <section>
                <div className="inputs">
                    <Input label='Username' icon={() => <PermIdentity />} value={username} onChange={setUsername}/>
                    <Input label='4-Digit PIN' icon={() => <Lock />} value={pin} onChange={setPin}/>
                </div>
                <div className="sign-in">
                    <Button label='Sign in' className='grey-button' link='/register'/>
                </div>
            </section>
        </div>
    )
}


export default Login