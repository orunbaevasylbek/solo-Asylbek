import { Radio, FormControl, FormLabel, Grid, Paper, RadioGroup, FormControlLabel, Button, Slider } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../../contexts/ProductContext";
import { useState } from "react";
import { background, color } from "../../helpers/consts";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: "20px",
    marginBottom: "20px",
    minWidth: "170px1",
    maxWidth: "350px",
  },
  back: {
    backgroundColor: 'transparent',
    color: 'grey'
  },
  sidebar: {
    position: 'fixed',
    right: '30px'
  }
}));

const SideBar = () => {
  const classes = useStyles();
  // const history = useHistory()
  const { getProductsData, history } = useProducts()
  const [type, setType] = useState(getType(history))
  const [price, setPrice] = useState(getPrice())
  // console.warn(getProductsData)
  console.warn("asdasdasd")
  // console.log(history)

  function getType(history) {
    console.warn(history)
    const search = new URLSearchParams(history.location.search)
    return search.get('type')
  }

  function getPrice() {
    const search = new URLSearchParams(history.location.search)
    return search.get('price_lte')
  }

  const handleChangeType = (e) => {
    if (e.target.value == "all") {
      const search = new URLSearchParams(history.location.search)
      search.delete('type')
      history.push(`${history.location.pathname}?${search.toString()}}`)
      getProductsData()
      setType(e.target.value)
      return
    }
    const search = new URLSearchParams(history.location.search)
    search.set('type', e.target.value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProductsData()
    setType(e.target.value)
  }

  const handleChangePrice = (e, value) => {
    const search = new URLSearchParams(history.location.search)
    search.set('price_lte', value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProductsData()
    setPrice(value)
  }

  const resetPrice = () => {
    const search = new URLSearchParams(history.location.search)
    search.delete('price_lte')
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProductsData()
    setPrice(getPrice())
  }

  return (
    <Grid item md={3} className={classes.sidebar}>
      <Paper elevation={2} className={classes.back}>
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup value={type} onChange={handleChangeType}>
            <FormControlLabel
              value="other"
              control={<Radio color="default" className={classes.back} />}
              label="other`s"
            />
            <FormControlLabel
              value="akmaral"
              control={<Radio color="default" className={classes.back} />}
              label="Akmaral`s"
            />
            <FormControlLabel
              value="all"
              control={<Radio color="default" className={classes.back} />}
              label="all miracles"
            />
          </RadioGroup>
        </FormControl>

        <Grid>
          <Slider
            value={price}
            onChange={handleChangePrice}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            className={classes.back}
            min={0}
            max={1000}
          />
          <Button
            onClick={resetPrice}
            variant="outlined"
            className={classes.back}>Стереть</Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SideBar;