import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/template/Home";
import ExpLaboral from "./components/laboral/ExpLaboral";
import Estudios from "./components/educacion/Estudios";
import Curriculum from "./components/cv/Curriculum";

const ROUTES = [
    { exact: true, path: '/', component: Home },
    { exact: true, path: '/experiencia-laboral', component: ExpLaboral },
    { exact: true, path: '/educacion', component: Estudios },
    { exact: true, path: '/cv', component: Curriculum },
    { exact: true, path: '/404', component: NotFound }
];

function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
            <a onClick={() => BrowserRouter.goBack()}>Presione aquí para regresar</a>
        </div>
    )
}

export default ROUTES;
