import React from 'react';
import {useState} from 'react';
import * as langIndex from "../../lang";
import Template from "./Template";
import foto1 from "../../img/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"

import {Carousel, Container} from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const Home = () => {
//|------Init------|//
    const [lang, setLang] = useState({get: (key) => key});
    const [lang_ok, setLangOk] = useState(false);

    if (!lang_ok) {
        langIndex.cargarLang((result) => {
            setLang(langIndex);
            setLangOk(true);
        });
    }

//|------./Init------|//
    return (
        <Template lang={lang}
                  lang_ok={lang_ok}
        >
            <div style={{backgroundColor: '#411e8f', height: '100%'}} >
                <Container className="bg-white">
                    <CaruselPrincipal lang={lang} lang_ok={lang_ok}/>
                    <div style={{paddingBottom: "100px"}}>
                        <SobreMi lang={lang} lang_ok={lang_ok}/>
                    </div>
                </Container>
            </div>
        </Template>
    )
};

function CaruselPrincipal({lang, lang_ok}) {
    return (
        <div>
            <div  style={{paddingTop: '46px'}}>
                <Carousel>
                    <Carousel.Item>
                        <img src={foto1} className="d-block w-100" height={400} alt="First slide"/>
                        <Carousel.Caption className="d-flex justify-content-center flex-column">
                            <h3>{lang.get('biografia.perfil')}</h3>
                            <p>{lang.get('biografia.isc')}. {lang.get('biografia.act')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img/work-731198_1920.jpg" className="d-block w-100" height={400} alt="Third slide"/>
                        <Carousel.Caption className="d-flex justify-content-center flex-column">
                            <h3>{lang.get('biografia.educacion')}</h3>
                            <p> {lang.get('biografia.iuemCompleto')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/img/office-932926_1920.jpg" className="d-block w-100" height={400}
                             alt="Third slide"/>

                        <Carousel.Caption className="d-flex justify-content-center flex-column">
                            <h3>{lang.get('biografia.experiencia')}</h3>
                            <p> {lang.get('biografia.inicioLaborar')}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
}

function SobreMi({lang, lang_ok}) {
    return (
        <div >
            <Card.Header className="bg-primary text-white">
                <h2>   {lang.get('biografia.sobreMi')} </h2>
            </Card.Header>
            <Card.Body>
                {lang.get('biografia.desSobreMi')}
            </Card.Body>
        </div>
    );
}

export default Home;
