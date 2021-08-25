import { Grid, Button, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ComentsCard from './ComentsCard';
import { useProducts } from '../contexts/ProductContext';
import { JSON_API_PRODUCTS } from '../helpers/consts';
import { useAuth } from '../contexts/AuthContext';
const useStyles = makeStyles((theme) => ({
    comentWindow: {
        width: 500,
        height: 300,
        border: 'solid 2px black',
        padding: 10,
        overflow: 'scroll',
        color: '#fff'
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    input: {
        width: 550,

    }
}))
const Coments = () => {
    const classes = useStyles()
    const { currentUser } = useAuth()
    const { getProducts, getProductDetails, productDetails } = useProducts()
    const [value, setValue] = useState('')
    const { id } = useParams()
    const [product, setProduct] = useState('')
    const [coment, setComent] = useState('')
    const handleInp = (e) => {
        let coment = {
            comment: e.target.value,
            user: currentUser.email
        }
        setComent(coment)
        setValue(e.target.value)
    }
    useEffect(() => {
        getProductDetails(id)
    }, [])
    const addComent = async () => {
        productDetails.comments.push(coment)
        setProduct(productDetails)
        const data = await axios.patch(`${JSON_API_PRODUCTS}/${id}`, product)
        getProductDetails()
        setValue('')
    }

    // const dar = new Date(date,hours)
    // console.log(dar)
    return (
        <>

            <Grid container justify="center">
                <Grid className={classes.comentWindow}>
                    {productDetails.comments ? (productDetails.comments.map((item) => (
                        <ComentsCard item={item} />
                    ))
                    ) : (
                        <div className={classes.root}>
                            <CircularProgress color="secondary" />
                        </div>
                    )}
                </Grid>
                <TextField placeholder="type comment" value={value} className={classes.input} onChange={handleInp} />
                <Button onClick={() => addComent(product.id)}>Send</Button>
            </Grid>

        </>
    );
};

export default Coments;