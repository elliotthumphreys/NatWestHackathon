import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '../../../shared-components/Button'

const Start = () => <div className="background">
      <div className="header-info-container">
        <Avatar src="./images/homeless-man.jpg" className="avatar"/>
        <div className="sub-heading-container">
          <h2>Bob</h2>
          <h3 className="sub-heading flex-center">48</h3>
        </div>
      </div>
      <div className="body-container">
        <p className="donate-msg">Donate to a category</p>
        <div className="pot-container">
          <Button label="Suit" className="button pot-btn"/>
          <Button label="Food" className="button pot-btn" />
          <Button label="Shelter" className="button pot-btn" />
          <Button label="More categories" className="button pot-btn" />
        </div>
      </div>
      
  </div>

export default Start