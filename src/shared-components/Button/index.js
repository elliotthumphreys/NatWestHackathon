import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const CustomButton = ({ link, className, label }) => {
    const classes = useStyles();

    return (
        <Link to={link}>
            <Fab
                variant="extended"
                color="primary"
                aria-label="Add"
                className={className || classes.margin}>
                {label}
            </Fab>
        </Link>
    )
}

export default CustomButton