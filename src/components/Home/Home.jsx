import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Main from './Main';
import music2 from '../../music/run.mp3'


const useStyles = makeStyles((theme) => ({
  music: {
    color: 'black'
  },
}));

const Home = () => {

  const classes = useStyles()

  return (
    <div>
      <Main />
      <ReactAudioPlayer className={classes.music}
        src={music2}
        autoPlay

      />
    </div>
  );
};

export default Home;