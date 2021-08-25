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
import { useProducts } from '../../contexts/ProductContext';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { useState } from 'react';
import { color } from '../../helpers/consts';
import { Link } from 'react-router-dom';

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

export default function Cart() {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { cart, getCart, changeProductCount, buy } = useProducts();

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCount();
  }, [cart]);

  const handleCountChange = (count, id) => {
    changeProductCount(count, id);
  };

  return (
    <>
      <TableContainer className={classes.global} component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">SubPrice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products?.length > 0 &&
              cart.products.map((product) => (
                <TableRow key={product.item.id}>
                  <TableCell>
                    <img className={classes.tableCellImg} src={product.item.image} alt={product.item.title} />
                  </TableCell>
                  <TableCell align="right">{product.item.title}</TableCell>
                  <TableCell align="right">{product.item.price}</TableCell>
                  <TableCell align="right">
                    <input className={classes.inpSub}
                      type="number"
                      value={product.count}
                      onChange={(e) => handleCountChange(e.target.value, product.item.id)}
                    />
                  </TableCell>
                  <TableCell align="right">{product.subPrice}</TableCell>
                </TableRow>
              ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>
                <Typography variant="h5">Total:</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">{cart.totalPrice}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid container justify="center">
          <IconButton >
            <Button
              onClick={buy}
              className={classes.btn}>Buy</Button>
          </IconButton>
        </Grid>
      </TableContainer>
    </>
  );
}