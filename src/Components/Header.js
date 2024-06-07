import React from 'react';
import Form from '../UI/Form';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <section className={classes.section}>
        <span className={classes.content}>
          <div className={classes.header}>
            <h1>NETFLIX</h1>
            <button onClick={props.signInButton}>Sign In</button>
          </div>
          <div className={classes['header-content']}>
            <h1>Unlimited movies, TV shows and more.</h1>
            <p className={classes.p1}>Watch anywhere. Cancel at any time.</p>
            <p className={classes.p2}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <Form />
          </div>
        </span>
      </section>
    </React.Fragment>
  );
};

export default Header;
