import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import { getCurrentPage } from '../helpers/functions/functions';
import ProductCard from './ProductCard';
import { color } from '../helpers/consts';
import SideBar from './Home/SideBar';

const useStyles = makeStyles((theme) => ({
  color: {
    color: color,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    display: 'flex',
    flexWrap: 'wrap',
  },
  list: {
    marginLeft: '20px',

  }

}))
const ProductList = () => {
  const classes = useStyles();
  const { productsData, getProductsData, pages, history } = useProducts()
  console.warn(history)
  const [page, setPage] = useState(getCurrentPage());
  // const history = useHistory()
  useEffect(() => {
    getProductsData()
  }, [])
  useEffect(() => {
    console.log(productsData);
  }, [productsData])

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set('_page', page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setPage(page);
  };
  return (

    <Grid className={classes.main}>
      <SideBar className={classes.sidebar} />
      <Grid container justify="space-evenly" className={classes.list} spacing={3}>
        {productsData ? (
          productsData.map((item) => (
            <Grid item>
              <ProductCard item={item} key={item.id} />
            </Grid>
          ))
        ) : (
          <>
            <h1>Подождите идет загрузка товаров</h1>
          </>
        )}
      </Grid>
      <div style={{ margin: '20px auto' }}>
        <Pagination
          count={pages}
          page={+page}
          onChange={handlePage}
        />
      </div>
    </Grid>

  );
};

export default ProductList;
