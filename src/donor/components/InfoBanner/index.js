import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';

const InfoBanner = ({person}) => {
    return <div className='info-banner'>
        <Avatar className='cover-image' children={person.name[0]} src={person.image} />
        <div className='header-info'>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
        </div>
    </div>
}
export default InfoBanner