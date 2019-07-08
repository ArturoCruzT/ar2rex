import React from 'react';
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { DiReact } from "react-icons/di";
import { GoHome } from "react-icons/go";
import { IoIosCode } from "react-icons/io";

function Navbar({lang,  lang_ok}) {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
            <a  className="navbar-brand " href="#">
                <span className={'text-info '}>  <DiReact size={35}/> </span>
                {` ${process.env.REACT_APP_APP_NAME}`}
                <Env env={process.env.REACT_APP_ENV}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-2 ">
                        <NavLink to="/" href="#" className="text-white">
                         <GoHome/>   {lang.get('navbar.home')}
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/experiencia-laboral" href="#" className="text-white">
                          <IoIosCode/>  {lang.get('navbar.expLab')}
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-right">
                  <li className="nav-item">
                        <a className="nav-link" href="#">{lang.get('navbar.contacto')}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Env = ({env}) => {
    if (env != 'prod') {
        const tipo_badge = env === 'dev' ? 'warning' : 'danger';
        return (
            <span className={`p-1 ml-1 badge badge-${tipo_badge}`}>env</span>
        );
    }
};

export default Navbar;
