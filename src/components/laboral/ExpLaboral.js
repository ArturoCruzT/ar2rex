import React from 'react';
import {useState} from 'react';
import * as langIndex from "../../lang";
import Template from "./../template/Template";
import {Container, Card, CardImg, CardColumns} from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import {Trabajos} from "../../models/trabajos";

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
                  lang_ok={lang_ok}>
            <Container style={{paddingTop:'52px', paddingBottom:'150px'}}>
                <h1>
                    {lang.get('laboral.titulo')}
                </h1>
                <InfoLaboral lang={lang} lang_ok={lang_ok} trabajos={Trabajos} />
            </Container>
        </Template>
    );
};

function InfoLaboral({lang, lang_ok, trabajos}) {
    return(
      <div className="d-flex justify-content-between flex-wrap box">
          <CardColumns>
          {
              (trabajos).map(( trabajo) =>
                  <CardLaboral lang={lang} lang_ok={lang_ok} trabajo={trabajo}/>

              )
          }
          </CardColumns>
      </div>
    );
}

function CardLaboral({lang, lang_ok, trabajo}) {

    return(
      <Card className="border-primary  mr-2 mb-2 " >
          <Card.Header className="border-primary">
              <h3>{trabajo.puesto}</h3>
          </Card.Header>
          <Card.Body className="d-flex justify-content-beetewn flex-column p-0 ">
            <CardImg src={"/img/"+ trabajo.img}/>
                <Card.Title className="bg-primary text-center">
                    {trabajo.empresa}
                </Card.Title>
              <Card.Text className="p-2">
                  {
                 (trabajo.actividades).map( actividad =>
                  <div>
                      <p> <GoPrimitiveDot />  {actividad.descripcion}</p>
                  </div>
                 )
                  }
              </Card.Text>
              <Card.Footer className="text-center" >
                  {trabajo.periodo}
              </Card.Footer>
          </Card.Body>
      </Card>
    );
}


export default ExpLaboral;