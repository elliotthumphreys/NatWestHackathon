import React from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}))

const CustomInput = ({ label, icon, value, onChange }) => {
    const classes = useStyles();

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    {icon()}
                </Grid>
                <Grid item>
                    <TextField id="input-with-icon-grid" label={label} value={value} onChange={(event) => onChange(event.target.value)}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomInput