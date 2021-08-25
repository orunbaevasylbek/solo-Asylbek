import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useProducts } from '../contexts/ProductContext';


const useStyles = makeStyles({
    inpSub: {
        backgroundColor: 'transparent',

    },
    table: {
        minWidth: 650,
    },
    global: {
        backgroundColor: 'transparent',
    },
    tableCellImg: {
        width: 50,
    },
    btn: {
        fontFamily: 'Roboto',
        width: '100px',
        height: '40px',
        borderRadius: '7px',
        backgroundColor: 'yellow',
        color: '#fff',
        textDecoration: 'none'
    },
    text: {
        textDecoration: 'none'
    }
});

export default function Favorite() {
    const classes = useStyles();
    const [count, setCount] = useState([]);
    const { getFavorites, favorites, } = useProducts();

    useEffect(() => {
        getFavorites();
    }, []);

    useEffect(() => {
        setCount();
    }, [favorites]);



    return (
        <>
            <TableContainer className={classes.global} component={Paper}>
                <Table className={classes.table} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Title</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {favorites?.products?.length > 0 &&
                            favorites.products.map((product) => (
                                <TableRow key={product.item.id}>
                                    <TableCell>
                                        <img className={classes.tableCellImg} src={product.item.image} alt={product.item.title} />
                                    </TableCell>
                                    <TableCell align="right">{product.item.title}</TableCell>


                                </TableRow>
                            ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}