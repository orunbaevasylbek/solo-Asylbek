import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Box, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete'
import { useProducts } from '../contexts/ProductContext';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useEffect } from 'react';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { background, color, user } from '../helpers/consts';
import { useAuth } from '../contexts/AuthContext';


const useStyles = makeStyles((theme) => ({

  titleg: {
    color: '#fff',
    textDecoration: 'none',

  },
  root: {
    width: 300,
    backgroundColor: 'transparent',
    color: '#fff',
    height: 450,
    boxShadow: '60px-16px teal',
    fontFamily: 'Kurale, serif',

  },
  color: {
    color: '#fff',
    fontFamily: 'Kurale, serif',
  },
  back: {
    backgroundColor: background
  },
  contentSize: {
    height: '100px',
    overflow: 'hidden'
  },
  media: {
    height: 200,

    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProductCard = ({ item }) => {
  const { currentUser } = useAuth()
  const classes = useStyles();
  const { deleteProduct, history, addProductToCart, cart, favorites, addFavorite, getFavorites, getCart } = useProducts()
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    getCart()
  }, [])
  useEffect(() => {
    getFavorites()
  }, [])

  const checkItemInCart = (id) => {
    if (cart && cart.products) {
      const foundItem = cart?.products.find(product => product.item.id === id)
      return foundItem ? 'secondary' : 'default'
    }
  }
  console.log(favorites);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const checkFavorites = (id) => {
    if (favorites && favorites.products) {
      const foundItem = favorites?.products.find(product => product.item.id === id)
      return foundItem ? 'secondary' : 'default'
    }
  }
  return (
    <Card className={classes.root}>
      <NavLink style={{ textDecoration: 'none' }} to={`/details/${item.id}`}>
        <CardMedia
          className={classes.media}
          image={item.image}
          title="Paella dish"
        />
        <Container className={classes.titleg} style={{ fontFamily: 'Kurale, serif', }} container>
          <CardHeader
            conta
            title={item.title}
          />
        </Container>
      </NavLink>
      <CardContent className={classes.contentSize}>
        <Typography variant="body2" className={classes.color} component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >

        <Container className={classes.iconBtn}>
          <Box component="span" m={1}>
            {item.price}$
          </Box>
          <IconButton color={checkItemInCart(item.id)} onClick={() => addProductToCart(item)} aria-label="add to favorites">
            <AddShoppingCartIcon className={classes.color} />
          </IconButton>
          {(currentUser.email == user) ? <IconButton onClick={() => history.push(`/edit/${item.id}`)}>
            <EditIcon className={classes.color} />
          </IconButton> : null}
          {(currentUser.email == user) ? <IconButton
            aria-label="share"
            onClick={() => deleteProduct(item.id)}
          >
            <DeleteIcon className={classes.color} />
          </IconButton> : null}
          <IconButton color={checkFavorites(item.id)} onClick={() => addFavorite(item)}>
            <StarOutlineRoundedIcon />
          </IconButton>
        </Container>
      </CardActions>
    </Card>
  );
};

export default ProductCard;