import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Template(props) {
    return (
        <div>
            <div className="navbar">
                <Navbar lang={props.lang}
                        lang_ok={props.lang_ok}/>
            </div>
            {props.children}
            <div className={'footer'}>
                <Footer/>
            </div>

        </div>
    );
}

export default Template;
