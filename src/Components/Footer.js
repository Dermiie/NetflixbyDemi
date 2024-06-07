import React from "react"
import classes from './Footer.module.css'

const Footer = () => {
    return(
        <React.Fragment>
            <section className={classes.section}>
                <p>Questions? Contact us.</p>
                <div>
                    <ul>
                        <li>FAQ</li>
                        <li>Investors Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    <ul>
                        <li>Help Centers</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                    <ul>
                        <li>Accounts</li>
                        <li>Ways to Watch</li>
                        <li>Coporate Informations</li>
                        <li>Only on Netflix</li>
                    </ul>
                    <ul>
                        <li>Media Centers</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <p>Netflix Nigeria</p>
            </section>
        </React.Fragment>
    )    
}

export default Footer