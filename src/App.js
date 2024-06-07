import React, { useState } from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import SignUpPage from './Components/SignUpPage';
import './App.css';

function App() {
  const [signIn, setSignIn] = useState(false);
  const signInHandler = () => {
    setSignIn(true)
  }
  const homePageHandler = () => {
    setSignIn(false)
  }
  return (
    <React.Fragment>
      {!signIn && (<Header signInButton={signInHandler} />)}
      {!signIn && (<Features />)}
      {!signIn && (<Faq />)}
      {!signIn && (<Footer />)}
      {signIn && (<SignUpPage homePage={homePageHandler} />)}
    </React.Fragment>
  );
}

export default App;
