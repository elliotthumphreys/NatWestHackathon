import React, { useState, useContext } from 'react'
import { PermIdentity, Lock } from '@material-ui/icons'
import Input from '../../../shared-components/Input'
import Button from '../../../shared-components/Button'
import Header from '../../../shared-components/Header'


const Login = () => {
    return (
        <div className="Login">
            <header>
                <Header/>
                <div>
                    <Button label='Sign in' className='white-button-pink-background' link='google.fuck.you'/>
                    <Button label='Sign up' className='white-button-pink-background' link='google.fuck.you'/>
                </div>
            </header>
            <section>
                <div className="inputs">
                    <Input label='Username' icon={() => <PermIdentity />} />
                    <Input label='4-Digit PIN' icon={() => <Lock />} />
                </div>
                <div className="sign-in">
                    <Button label='Sign in' className='grey-button' link='google.fuck.you'/>
                </div>
            </section>
        </div>
    )
}


export default Login