import React from 'react';
import firstImage from './Assets/tv.webp';
import secondImage from './Assets/secondImage.jpg';
import thirdImage from './Assets/thirdImage.png';
import classes from './Features.module.css';
const Features = () => {
  return (
    <React.Fragment>
      <section className={classes['first-section']}>
        <div>
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <img src={firstImage} alt="Tv Show"></img>
      </section>
      <section className={classes['second-section']}>
        <img src={secondImage} alt="Download on device"></img>
        <div>
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </section>
      <section className={classes['third-section']}>
        <div>
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </section>
      <section className={classes['kids-section']}>
        <img src={thirdImage} alt="Kids"></img>
        <div>
          <h1>Create profiles for kids.</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Features;
