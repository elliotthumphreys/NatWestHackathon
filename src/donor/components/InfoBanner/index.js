import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';

const InfoBanner = ({person}) => {
    return <div className='info-banner'>
        <Avatar className='cover-image' children={person.name[0]} src={person.image} />
        <h1>{person.name}</h1>
    </div>
}
export default InfoBanner