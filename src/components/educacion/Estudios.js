import React from 'react';
import {useState} from 'react';
import Template from "../template/Template";
import * as langIndex from "../../lang";
import {Container, Card, CardImg, CardColumns} from "react-bootstrap";
import {Instituciones} from "../../models/educacion";

const Estudios = () => {
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
                  lang_ok={lang_ok}>
            <Container style={{paddingTop:'52px', paddingBottom:'150px'}}>
                <h1>
                    {lang.get('educacion.titulo')}
                </h1>
                <InfoEducacion lang={lang} lang_ok={lang_ok} instituciones={Instituciones}/>
            </Container>
        </Template>
    );
};


function InfoEducacion({lang, lang_ok, instituciones}) {
    return(
        <div className="d-flex justify-content-between flex-wrap box">
            <CardColumns>
                {
                    (instituciones).map(institucion =>
                        <CardLaboral lang={lang} lang_ok={lang_ok} institucion={institucion}/>

                    )
                }
            </CardColumns>
        </div>
    );
}

function CardLaboral({lang, lang_ok, institucion}) {

    return(
        <Card className=" border-primary  mr-2 mb-2 " >
            <Card.Body className="text-center p-2 ">
                <CardImg className="card-img-top" src={"/img/"+ institucion.img}/>
                <Card.Title >
                    {institucion.nombre}
                </Card.Title>
                <Card.Subtitle>
                    {institucion.titulo}
                </Card.Subtitle>
                <Card.Footer className="text-center" >
                    {institucion.periodo}
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}
export default Estudios;