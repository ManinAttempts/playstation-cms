import React from "react";
import { Typography } from "@mui/material";
import spidermanVideo from "./images/spiderman.mp4";
import horizonVideo from "./images/horizon.mp4";
import rachetVideo from "./images/Haptic.mp4";
import xVideo from "./images/x.mp4";
import PS5logo from "./images/PS5_logo.png";
import img1 from "./images/ps5-game_carousel-01_spider-man.webp";
import img2 from "./images/ps5-game_carousel-02_horizon-forbidden-west.webp";
import img3 from "./images/ps5-game_carousel-03_ratchet-and-clank.webp";
import img4 from "./images/ps5-game_carousel-08_nba-2k22.webp";
import img5 from "./images/image.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="playhasnolimit">
          <h1 className="header">PLAY HAS NO LIMIT</h1>
          <img className="ps5logo" src={PS5logo}></img>
        </div>

        <video loop autoPlay muted playsInline className="spidermanvideo">
          <source src={spidermanVideo} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <div className="explore">
          <a href="#">Explore</a>
        </div>
      </div>

      <div className="slide-container">
        <h1 className="header2">
          Play the latest hits on your Playstation console
        </h1>
        <span className="slider-span" id="slider-span1"></span>
        <span className="slider-span" id="slider-span2"></span>
        <span className="slider-span" id="slider-span3"></span>
        <span className="slider-span" id="slider-span4"></span>

        <div className="image-slider">
          <div className="slides-div" id="slide-1">
            <img src={img1} className="img" id="img1" />
            <a href="#slider-span1" className="button" id="button-1"></a>
          </div>
          <div className="slides-div" id="slide-2">
            <img src={img2} className="img" id="img2" />
            <a href="#slider-span2" className="button" id="button-2"></a>
          </div>
          <div className="slides-div" id="slide-3">
            <img src={img3} className="img" id="img3" />
            <a href="#slider-span3" className="button" id="button-3"></a>
          </div>
          <div className="slides-div" id="slide-4">
            <img src={img4} className="img" id="img4" />
            <a href="#slider-span4" className="button" id="button-4"></a>
          </div>
        </div>
        <img className="secondimage" src={img5}></img>
      </div>

      <div className="container3">
        <div className="videocontainer">
          <video loop autoPlay muted playsInline className="horizonvideo">
            <source src={horizonVideo} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="trigger">
            <div>
              <Typography variant="h2" gutterBottom component="div">
                Adaptive Triggers
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                Dynamic resistance mimics the tension
                <br /> of interactions with in‑game
                <br />
                gear and objects in select PS5™ games.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="container4">
        <div className="videocontainer">
          <video loop autoPlay muted playsInline className="horizonvideo">
            <source src={rachetVideo} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="vibration">
            <div>
              <Typography variant="h2" gutterBottom component="div">
                Haptic Feedback
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                Responsive vibrations react to your in‑game
                <br /> choices and simulate environmental factors
                <br />
                in select PS5 games.
              </Typography>
            </div>
            <div className="buynow">
              <a href="#">Buy now</a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <h3>Sigma Gaming</h3>
        </div>
        <div className="socials">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy;2020 Sigma Gaming. Designed by{" "}
            <span> Afrida and Abdullah</span>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
