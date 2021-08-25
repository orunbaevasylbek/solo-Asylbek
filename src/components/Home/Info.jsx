import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    back: {
        fontSize: '25px',
        backgroundColor: 'rgb(56,40,23,0.6)'
    }
}))
const Info = () => {
    const classes = useStyles()
    return (
        <Container className={classes.back}>
            <Typography className={classes.back}>
            </Typography>
        </Container>
    );
};

export default Info;