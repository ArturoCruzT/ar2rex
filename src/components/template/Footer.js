import React from 'react';
import './template.css'
import {FaHeart} from "react-icons/fa";
import {IoLogoFacebook,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin} from "react-icons/io";

function Footer() {
    return (
        <div className="w-100 d-flex flex-column  bg-dark text-white ">
            <div className="text-center mb-0 pt-3 pb-2 mt-0">
                <div className="text-white">
                   <IoLogoFacebook size={35}/>
                   <IoLogoTwitter size={35}/>
                   <IoLogoInstagram size={35}/>
                   <IoLogoLinkedin size={35}/>
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
