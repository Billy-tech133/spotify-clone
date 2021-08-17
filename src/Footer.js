import { Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  Repeat,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="footer-albumLogo" src="https://bit.ly/3smpavw" alt="" />
        <div className="footer-songInfo">
          <h2>Donda!</h2>
          <p>Kanye West</p>
        </div>
      </div>
      <div className="footer-center">
        <Shuffle className="footer-green" />
        <SkipPrevious className="footer-icon" />
        <PlayCircleOutline fontSize="large" className="footer-icon" />
        <SkipNext className="footer-icon" />
        <Repeat className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continous-slide" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
