import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    coment: {
        width: 300,
        height: 49,
        border: '2px solid black',
        marginBottom: 10
    },
    users: {
        color: 'red'
    }
}))
const ComentsCard = ({ item }) => {
    const classes = useStyles()
    return (
        <div className={classes.coment}>
            <Typography className={classes.users}>
                {item.user}
            </Typography>
            <Typography>
                {item.comment}

            </Typography>
        </div>
    );
};

export default ComentsCard;