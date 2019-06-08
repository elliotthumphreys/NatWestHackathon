import React from 'react'

const Header = () => <h1 className='header-text'>PotPay<span>&trade;</span></h1>

export const ThinHeader = ({body}) => (
    <header className='thin-header'>
        {body() || Header()}
    </header>
)

export default Header