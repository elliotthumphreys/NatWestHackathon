import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { PermIdentity, Lock } from '@material-ui/icons'

const Login = () => {
    return (
        <div className="Login">
            <header>
                <h1>PotPay<span>&trade;</span></h1>
                <div>
                    <a href=''>Sign in</a>
                    <a href=''>Sign up</a>
                </div>
            </header>
            <section>
                <div className="inputs">
                    <label>
                        <PermIdentity/>
                        <input placeholder='Username' />
                    </label>
                    <label>
                        <Lock/>
                        <input placeholder='4-Digit PIN' />
                    </label>
                </div>
                <div className="sign-in">
                    <a href=''>Sign in</a>
                </div>
            </section>
        </div>
    )
}


export default Login