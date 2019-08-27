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


const Curriculum = () => {
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
			<div className="pb-5">
				<div className=" py-5 pb-5">
					<div className="d-flex justify-content-between">
						<div style={{width: '3%', backgroundImage: `url(${leftImg})`}} className="orange darken-4">
						
						</div>
						<div style={{width: '97%'}}>
							<Encabezado/>
							<div className="d-flex justify-content-between">
								<div className="pr-3" style={{
									backgroundImage: `url(${Background})`,
									width: '35%',
									'border-right': "5px solid #ff6f00"
								}}>
									<LeftPersonal/>
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


const Encabezado = () => {
	return (
		
		<div className="d-flex justify-content-around py-3" style={{backgroundImage: `url(${Background})`}}>
			<div>
				<img src={arturo} className="d-block  rounded-circle" height={200} width={200}
					 alt="First slide"/>
			</div>
			<div className="">
				<div>
					<h1 className="text-center"> I.S.C Arturo Cruz Torres </h1>
				</div>
				<div className="d-flex justify-content-between">
					<div className="border-right border-dark pr-3">
						<h3><strong> Software Delevolper </strong></h3>
					</div>
					<div>
						<h3> IT </h3>
					</div>
				
				
				</div>
			</div>
		</div>
	
	)
};


const LeftPersonal = () => {
	return (
		<div>
			<div className="text-center">
				<h2 style={{'border-bottom': '5px solid #0d47a1'}}>
					Contacto
				</h2>
			</div>
			<RenglonPersonal
				titulo="Telefono"
				texto="  722-286-20-41"
				icon={<FaMobileAlt size={20}/>}
			/>
			<RenglonPersonal
				titulo="Direccíón"
				texto="San Mateo Atenco, Estado de México"
				icon={<FaHome size={20}/>}
			/>
			<RenglonPersonal
				titulo="Email"
				texto="isc.arturo.cruz@outlook.com"
				icon={<IoIosMail
					size={20}/>}
			/>
			<RenglonPersonal
				titulo="Web"
				texto="www.ar2rex.com"
				icon={<FaChrome size={20}/>}
			/>
			<div className="text-center">
				<h2 style={{'border-bottom': '5px solid #0d47a1'}}>
					Skills
				</h2>
			</div>
			{
				Habilidades.map(habilidad =>
					<div>
						<RenglonPersonal
							titulo={habilidad.nombre}
							texto={habilidad.nivel}
							icon={habilidad.icono}
						/>
					</div>
				)
			}
			<div className="text-center">
				<h2 style={{'border-bottom': '5px solid #0d47a1'}}>
					Idioma
				</h2>
			</div>
			<RenglonPersonal
				titulo="Ingles"
				texto="B1"
				icon={<FaLanguage/>}
			/>
		</div>
	)
};

const RenglonPersonal = ({titulo, texto, icon}) => {
	return (
		<div className="d-flex justify-content-between py-2">
			<div className="px-2 ">
				<div className="px-2 d-flex justify-content-start">
					<div className="pr-2 ">
						{icon}
					</div>
					
					<h5 className="pt-1"><strong>{titulo} </strong></h5>
				</div>
			</div>
			<div className="d-flex flex-wrap">
				{texto}
			</div>
		</div>
	)
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