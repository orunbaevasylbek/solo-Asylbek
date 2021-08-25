import { Container, Paper, TextField, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { handleInp } from '../helpers/functions/functions';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import { useProducts } from '../contexts/ProductContext';
import { background, color } from '../helpers/consts';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 800,
        backgroundColor: background
    },
    title: {
        textAlign: 'center',
        color: color,

    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        color: 'black'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    textfield: {
        marginTop: 10
    }

}))
const handleClick = () => {

}
const EditProductPage = () => {
    const classes = useStyles()
    const [product, setProduct] = useState({
        title: '',
        type: '',
        image: '',
        description: '',
        price: 0,

    })
    const { id } = useParams()
    const { getProductDetails, productDetails, history, saveEditedProduct } = useProducts()

    useEffect(() => {
        getProductDetails(id)
    }, [])
    useEffect(() => {
        setProduct(productDetails);
    }, [productDetails])
    console.log(product)
    return (
        <Paper className={classes.paper} elevation={3}>
            <h1 className={classes.title}>EDIT</h1>
            <Container className={classes.container}>
                <img style={{ width: 400 }} src={product.image ? product.image : 'https://i.ytimg.com/vi/rHhc2XOSlHU/hqdefault.jpg'} />
                <form className={classes.form} noValidate autoComplete='off'>
                    <TextField
                        name='title'
                        variant="outlined"
                        value={product.title}
                        label="title"
                        onChange={(e) => handleInp(e, product, setProduct)}
                        className={classes.textfield}
                    />
                    <TextField
                        name='description'
                        variant="outlined"
                        value={product.description}
                        label="Description"
                        onChange={(e) => handleInp(e, product, setProduct)}
                        className={classes.textfield}
                    />
                    <TextField
                        name='type'
                        variant="outlined"
                        label="Type"
                        value={product.type}
                        onChange={(e) => handleInp(e, product, setProduct)}
                        className={classes.textfield}
                    />
                    <TextField
                        name='image'
                        variant="outlined"
                        label="Image URL"
                        value={product.image}
                        onChange={(e) => handleInp(e, product, setProduct)}
                        className={classes.textfield}
                    />
                    <TextField
                        name='price'
                        variant="outlined"
                        label="Price"
                        value={product.price}
                        onChange={(e) => handleInp(e, product, setProduct)}
                        className={classes.textfield}
                    />
                    <Container>
                        <Button onClick={() => saveEditedProduct(product.id, product)} className={classes.title}>
                            <SaveIcon />
                        </Button>
                        <Button onClick={() => history.push('/')} className={classes.title}>
                            <CancelIcon />
                        </Button>
                    </Container>
                </form>
            </Container>
        </Paper>
    );
};

export default EditProductPage;