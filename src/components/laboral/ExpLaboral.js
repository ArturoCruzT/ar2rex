import React from 'react';
import {useState} from 'react';
import * as langIndex from "../../lang";
import Template from "./../template/Template";

const ExpLaboral = () => {
    //|------Init------|//
    const [lang, setLang] = useState({get: (key) => key});
    const [lang_ok, setLangOk] = useState(false);

    if (!lang_ok) {
        langIndex.cargarLang((result) => {
            setLang(langIndex);
            setLangOk(true);
        });
    }
    return (
        <Template lang={lang}
                  lang_ok={lang_ok}
        >
            
        </Template>
    );
};

export default ExpLaboral;