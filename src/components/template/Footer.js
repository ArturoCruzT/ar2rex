import React from 'react';
import './template.css'
import {FaHeart} from "react-icons/fa";
import {IoLogoFacebook,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin} from "react-icons/io";
import Tooltiphov from "./Tooltiphov";

function Footer() {
    return (
        <div className="w-100 d-flex flex-column  bg-dark text-white">
            <div className="text-center mb-0 pt-3 pb-2 mt-0">
                <div className="text-white">
                    <Tooltiphov key={"face"} placement={'left'} texto={'arturpollo'}>
                        <IoLogoFacebook size={35}  onClick={ () => window.open('https://www.facebook.com/arturpollo') }/>
                    </Tooltiphov>
                    <Tooltiphov key={"twitter"} placement={'top'} texto={'ar2r3x'}>
                        <IoLogoTwitter size={35}  onClick={ () => window.open('https://twitter.com/ar2r3x') }/>
                    </Tooltiphov>
                      <Tooltiphov key={"instagram"} placement={'bottom'} texto={'ar2rex'}>
                        <IoLogoInstagram size={35}  onClick={ () => window.open('https://www.instagram.com/ar2rex/') }/>
                    </Tooltiphov>
                      <Tooltiphov key={"link"} placement={'right'} texto={'iscarturocruz'}>
                        <IoLogoLinkedin size={35}  onClick={ () => window.open('https://www.linkedin.com/in/iscarturocruz/') }/>
                    </Tooltiphov>
                </div>
                <code>
                    &lt;/&gt; Developed with
                    &nbsp;<span className="text-danger"><FaHeart/></span>&nbsp;
                    in&nbsp;
                    <img src="/img/mexico.png" style={{height:'1rem'}}/>
                    <br/>
                    {process.env.REACT_APP_VERSION}
                </code>
            </div>
        </div>
    );
}

export default Footer;
