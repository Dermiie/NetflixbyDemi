import React, { useState } from 'react';
import classes from './SignUpPage.module.css';

const SignUpPage = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (event.target.value.trim() === '') {
      return;
    }
    if (
      event.target.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailIsValid(true);
    }
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const inputIsInvalid = !emailIsValid && emailIsTouched;

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
    if (event.target.value.trim().length < 4) {
      return;
    } else {
      setPasswordIsValid(true);
    }
  };

  const passwordBlurHandler = () => {
    setPasswordIsTouched(true);
  };

  const passwordIsInvalid = !passwordIsValid && passwordIsTouched;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!emailIsValid){
      return;
    }
    if(!passwordIsValid){
      return;
    }
    console.log(enteredEmail);
    console.log(enteredPassword);
    setEnteredEmail('');
    setEnteredPassword('');
    setEmailIsTouched(false);
    setPasswordIsTouched(false);
  }

  return (
    <React.Fragment>
      <div className={classes.section}>
        <h1 className={classes.badge} onClick={props.homePage}>
          NETFLIX
        </h1>
        <div className={classes.form}>
          <form onSubmit={formSubmitHandler}>
            <div>
              <h1>Sign Up</h1>
            </div>
            <div className={classes.input}>
              <input
                className={inputIsInvalid ? classes.invalid : ''}
                id="email"
                placeholder="Email address"
                onChange={emailHandler}
                type="email"
                value={enteredEmail}
                onBlur={emailBlurHandler}
              ></input>
              {inputIsInvalid && (
                <p className={classes['invalid-text']}>
                  Please enter a valid Email
                </p>
              )}
            </div>
            <div className={classes.input}>
              <input
                className={passwordIsInvalid ? classes.invalid : ''}
                type="password"
                onChange={passwordHandler}
                value={enteredPassword}
                placeholder="Password"
                onBlur={passwordBlurHandler}
              ></input>
              {passwordIsInvalid && (
                <p className={classes['invalid-text']}>
                  Password must contain between 4 and 60 characters
                </p>
              )}
            </div>
            <div>
              <button type="submit">Sign In</button>
            </div>
            <div className={classes.checkbox}>
              <div>
                <input type="checkbox" name="checkbox"></input>
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <p>Need help?</p>
            </div>
            <div className={classes['sign-up']}>
              <div>
                New to Netflix? <span>Sign up now.</span>
              </div>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a robot.
              </p>
            </div>
          </form>
        </div>
        <footer className={classes.footer}>
          <div className={classes['footer-content']}>
            <p>Questions? Contact Us</p>
            <ul>
              <li>FAQ</li>
              <li>Test Center</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preference</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default SignUpPage;
