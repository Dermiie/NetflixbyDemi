import React, { useEffect, useState } from 'react';
import classes from './Form.module.css';

const Form = (props) => {
  const [enteredData, setEnteredData] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    
  },[])
  
  
  const enteredDataHandler = (event) => {
    setIsTouched(true);
    setEnteredData(event.target.value);
    if (event.target.value.trim() !== '') {
      setIsValid(true);
    }
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const inputIsInvalid = !isValid && isTouched

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredData.trim().length === 0) {
      setIsValid(false);
      return;
    }
    
    console.log(enteredData);

    setEnteredData('');
    setIsTouched(false);
    setIsValid(false);
  };
  return (
    <React.Fragment>
      <form
        className={`${classes.form} ${props.className}`}
        onSubmit={submitHandler}
      >
        <input
          className={inputIsInvalid ? classes.invalid : ''}
          placeholder="Email address"
          type="email"
          id="uEmail"
          value={enteredData}
          onBlur={onBlurHandler}
          onChange={(e) => enteredDataHandler(e)}
        ></input>
        <button type="submit">{`Get Started >`}</button>
      </form>
      {inputIsInvalid && (
        <p className={classes['invalid-text']}>Email is required!</p>
      )}
    </React.Fragment>
  );
};

export default Form;
