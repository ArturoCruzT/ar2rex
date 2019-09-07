import React, {useState} from 'react';
import Template from "../template/Template";
import * as langIndex from "../../lang";
import Background from "../../img/cube.jpg";
import leftImg from "../../img/triangulo-naranja-patron-geometrico_1182-592.jpg";
import arturo from "../../img/arturoc.jpg";
import {FaMobileAlt, FaHome, FaChrome, FaLanguage} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {Habilidades} from "../../models/Habilidades";
import {Trabajos} from "../../models/trabajos";
import {Instituciones} from "../../models/educacion";
import {Info_es} from "../../models/Info";
import Encabezado from "./Encabezado";
import Cintillo from "./Cintillo";
import InfoPersonal from "./InfoPersonal";


const Curriculum = () => {
	const [info, setInfo] = useState({});
	const [lang, setLang] = useState({get: (key) => key});
	const [lang_ok, setLangOk] = useState(false);
	
	if (!lang_ok) {
		langIndex.cargarLang((result) => {
			setLang(langIndex);
			setLangOk(true);
			seleccionaInfo()
		});
	}
	const seleccionaInfo = () => {
		setInfo(Info_es);
	};
	return (
		<Template lang={lang}
				  lang_ok={lang_ok}
		>
			<div className="pb-5">
				<div className=" py-5 pb-5">
					<div className="d-flex justify-content-between">
						<Cintillo imagen={leftImg} tamaño={'3%'}/>
						<div style={{width: '97%'}}>
							<Encabezado info={info} foto={arturo} Background={Background}/>
							<div className="d-flex justify-content-between">
								<div className="pr-3" style={{width: '38%'}}>
									<InfoPersonal info={info} Background={Background}/>
								</div>
								<div className="pt-5" style={{width: '60%'}}>
									<div className="text-center" style={{'border-bottom': '5px solid #0d47a1'}}>
										<h3>
											Experiencia laboral
										</h3>
									</div>
									<div>
										{
											(Trabajos || []).map((trabajo, index) =>
												<div>
													{
														index < 2 && <Trabajo trabajo={trabajo}/>
													}
												</div>
											)
										}
									</div>
									<div className="text-center" style={{'border-bottom': '5px solid #0d47a1'}}>
										<h3>
											Educación
										</h3>
									</div>
									<div className="pb-5">
										{
											(Instituciones || []).map(institucion =>
												<Institucion institucion={institucion}/>
											)
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Template>
	);
};


const Trabajo = ({trabajo}) => {
	return (
		<div>
			<div className="d-flex justify-content-start">
				<div className="px-4"><h3>{trabajo.empresa}</h3></div>
				<div className="py-2"> {trabajo.puesto}</div>
			</div>
			<div className="text-info px-5">
				{trabajo.periodo}
			</div>
			<div className="px-5">
				<ul>
					{
						(trabajo.actividades).map((actividad, index) =>
							<li>
								{actividad.descripcion}
							</li>
						)
					}
				</ul>
			</div>
		
		</div>
	)
};

const Institucion = ({institucion}) => {
	return (
		<div className="d-flex justify-content-start">
			<div style={{fontSize: '.8rem'}} className="px-2 w-25">
				<div>
					{institucion.periodo}
				</div>
				<div>
					{institucion.ubicacion}
				</div>
			</div>
			<div>
				<div>
					<strong>{institucion.nombre}</strong>
				</div>
				<div>
					{institucion.titulo}
				</div>
			</div>
		
		</div>
	)
};
export default Curriculum;