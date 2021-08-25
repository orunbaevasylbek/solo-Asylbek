import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { color } from '../../helpers/consts';

const useStyles = makeStyles((theme) => ({
    main: {
        height: '500px',
    },
    title: {
        fontSize: 65,
        fontFamily: 'Dancing Script, cursive',
        fontWeight: 900,
        textShadow: '9px 18px 18px rgba(0,0,4)',
        color: '#fff',


    },

}))
const Main = () => {
    const classes = useStyles()
    return (
        <>
            <Grid container alignItems="center" justify="center" className={classes.main}>
                <Typography className={classes.title}>
                    Welcome to page of Akmaral
            </Typography>
            </Grid>
        </>

    );
};

export default Main;