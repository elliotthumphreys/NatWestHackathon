import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

const Background = styled.div`
    background: #ff6b6b;
    color: #222f3e;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    height: 100vh;
    color: white;
`

const Start = () => <div class="">
      <div className="header-info-container">
        <Avatar src="./images/homeless-man.jpg" className="avatar"/>
        <div className="sub-heading-container">
          <h2>Bob</h2>
          <h3 className="sub-heading flex-center">48</h3>
        </div>
      </div>
      <div className="body-container">
        <div className="pot-container">

        </div>
        <div class="donate-btn-container">
          
        </div>
      </div>
      
  </div>

export default Start