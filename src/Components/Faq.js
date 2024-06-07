import React from 'react';
import Form from '../UI/Form';
import UseDropdown from '../hook/use-dropdown';
import classes from './Faq.module.css';

const Faq = () => {
  const {
    dropdownHandler: firstDropdownHandler,
    dropdownIsVisible: firstDropdown,
  } = UseDropdown();
  const {
    dropdownHandler: secondDropdownHandler,
    dropdownIsVisible: secondDropdown,
  } = UseDropdown();
  const {
    dropdownHandler: thirdDropdownHandler,
    dropdownIsVisible: thirdDropdown,
  } = UseDropdown();
  const {
    dropdownHandler: fourthDropdownHandler,
    dropdownIsVisible: fourthDropdown,
  } = UseDropdown();
  const {
    dropdownHandler: fifthDropdownHandler,
    dropdownIsVisible: fifthDropdown,
  } = UseDropdown();
  const {
    dropdownHandler: lastDropdownHandler,
    dropdownIsVisible: lastDropdown,
  } = UseDropdown();
  return (
    <React.Fragment>
      <section className={classes.background}>
        <h1>Frequently Asked Questions</h1>
        <div className={classes.questions}>
          <span className={!firstDropdown ? classes['dropdown-margin'] : ''}>
            <p>What is Netflix?</p>
            <button onClick={firstDropdownHandler}>{firstDropdown ? 'X' : '+'}</button>
          </span>
          {firstDropdown && (
            <div>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. <p className={classes['dropdown-p']}>You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!</p>
            </div>
          )}
          <span className={!secondDropdown ? classes['dropdown-margin'] : ''}>
            <p>How much does Netflix cost?</p>
            <button onClick={secondDropdownHandler}>{secondDropdown ? 'X' : '+'}</button>
          </span>
          {secondDropdown && (
            <div>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
            </div>
          )}
          <span className={!thirdDropdown ? classes['dropdown-margin'] : ''}>
            <p>Where can i watch Netflix?</p>
            <button onClick={thirdDropdownHandler}>{thirdDropdown ? 'X' : '+'}</button>
          </span>
          {thirdDropdown && <div>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. <p className={classes['dropdown-p']}></p> You can also download your favorite shows with
            the iOS, Android, or Windows 10 app. Use downloads to watch while
            you're on the go and without an internet connection. Take Netflix
            with you anywhere.
          </div>}
          <span className={!fourthDropdown ? classes['dropdown-margin'] : ''}>
            <p>How do i cancel?</p>
            <button onClick={fourthDropdownHandler}>{fourthDropdown ? 'X' : '+'}</button>
          </span>
          {fourthDropdown && <div>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>}
          <span className={!fifthDropdown ? classes['dropdown-margin'] : ''}>
            <p>What can i watch on Netflix?</p>
            <button onClick={fifthDropdownHandler}>{fifthDropdown ? 'X' : '+'}</button>
          </span>
          {fifthDropdown && <div>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </div>}
          <span className={!lastDropdown ? classes['dropdown-margin'] : ''}>
            <p>Is Netflix good for kids?</p>
            <button onClick={lastDropdownHandler}>{lastDropdown ? 'X' : '+'}</button>
          </span>
          {lastDropdown && <div>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </div>}
        </div>
        <div className={classes.footer}>
          <p className={classes['footer-text']}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Form className={classes.form} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Faq;
