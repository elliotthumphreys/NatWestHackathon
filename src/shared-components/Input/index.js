import React from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    grid: {
        margin: theme.spacing(20)
    }
}))

const CustomInput = ({ label, icon, value, onChange, type = 'text' }) => {
    const classes = useStyles();

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end" item xs={12}>
                <Grid item  xs={12}>
                    {icon()}
                </Grid>
                <Grid item  xs={12}>
                    <TextField
                        id="input-with-icon-grid"
                        label={label}
                        value={value}
                        type={type}
                        onChange={(event) => onChange(event.target.value)}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomInput