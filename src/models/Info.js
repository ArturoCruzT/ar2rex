import React from 'react';
import { FaAngular, FaLaravel, FaReact, FaHtml5, FaBootstrap, FaGithub}  from 'react-icons/fa';
import { IoLogoJavascript}  from 'react-icons/io';
import  logoConalep from "../img/Conalep-logo.png";
import  logoIuem from "../img/iuem_logo.png";


export const Info_es = {
	nombre: 'Arturo Cruz Torres',
	titulo: 'Ingeniero en Sistemas Computacionales',
	puesto: 'Desarrollador Web Front End',
	contacto:[
		{nombre: 'telefono', descripcion:'722 286 20 41'},
		{nombre: 'Correo', descripcion:'isc.arturo.cruz@outlook.com'},
		{nombre: 'direccion', descripcion:'San Mateo Atenco, Edo Méx'},
		{nombre: 'Pagina Web', descripcion:'www.ar2rex.com'}
	],
	idiomas: [
		{nombre:'Ingles' , nivel:'B1'}
	],
	habilidades:[
		{nombre: 'Larael/PHP', nivel: '',  icono: <FaLaravel/>},
		{nombre: 'Javascript', nivel: '',  icono: <IoLogoJavascript/>},
		{nombre: 'Angular js', nivel: '' , icono: <FaAngular/>},
		{nombre: 'React js', nivel:'',  icono: <FaReact/>},
		{nombre: 'Html', nivel:'',  icono: <FaHtml5/>},
		{nombre: 'Bootstrap', nivel:'',  icono: <FaBootstrap/>},
		{nombre: 'GitHub', nivel:'',  icono: <FaGithub/>}
	],
	trabajos:[
		{
			empresa: 'Saparsa S.A de C.V',
			puesto: 'Full Stack Developer',
			periodo: 'Marzo 2018 - Actualidad',
			ubicacion:'Lerma, Edo Méx',
			img: 'laptop-2588606_1920.jpg',
			actividades: [
				{'descripcion':'Desarrollo web Front End (Angualr Js, React Js) '},
				{'descripcion':'Desarrollo web Back-End (Laravel)'},
				{'descripcion':'Gestión de Cambios'},
				{'descripcion':'Gestión de requerimientos'},
				{'descripcion':'Control de versiones'},
				{'descripcion':'Administración de Base de Datos '},
				{'descripcion':'Instructor Office 365 Básico'},
				{'descripcion':'Mantenimiento de equipo de computo'},
				{'descripcion':'Soporte  técnico'},
				{'descripcion':'Actividades administrativas'}
			]
		},{
			empresa: 'Servicios Malu',
			puesto: 'Auxiliar  de Sistemas',
			periodo: 'Marzo 2018 - Febrero 2017',
			ubicacion:'Lerma Edo Méx',
			img: 'work-731198_1920.jpg',
			actividades: [
				{'descripcion':'Desarrollo de aplicaciones web '},
				{'descripcion':'Desarrollo  aplicaciones de escritorio '},
				{'descripcion':'Versionamiento y control de cambios'},
				{'descripcion':'Gestion de requerimientos'},
				{'descripcion':'Administracón de Base de Datos'}
			]
		}
	],
	estudios:[
		{
			nombre:"Istituto Universitario del Estado de México",
			titulo:"Ing. en Sistemas computacionales",
			ubicacion:"Metepec, Estado de México",
			distinciones:"",
			periodo:"2013 -  2016",
			img:logoIuem
		} , {
			nombre:"Colegio Nacional de Educación Profesional Técnica",
			titulo:"PTB. En Mantenimiento de Equipo de Computo",
			ubicacion:"Lerma, Estado de México",
			distinciones:"Alumno de Sistema DUAL",
			periodo:" 2010 -  2013",
			img:logoConalep
		}
	]
};


export const Info_en = {
	nombre: 'Arturo Cruz Torres',
	titulo: 'Ingeniero en Sistemas Computacionales',
	puesto: 'Front End Developer',
	contacto:[
		{nombre: 'telefono', descripcion:'722 286 20 41'},
		{nombre: 'email', descripcion:'isc.arturo.cruz@outlook.com'},
		{nombre: 'direccion', descripcion:'San Mateo Atenco, Edo Méx'},
		{nombre: 'web', descripcion:'www.ar2rex.com'}
	],
	idiomas: [
		{nombre:'Ingles' , nivel:'B1'}
	],
	habilidades:[
		{nombre: 'Larael/PHP', nivel: '',  icono: <FaLaravel/>},
		{nombre: 'Javascript', nivel: '',  icono: <IoLogoJavascript/>},
		{nombre: 'Angular js', nivel: '' , icono: <FaAngular/>},
		{nombre: 'React js', nivel:'',  icono: <FaReact/>},
		{nombre: 'Html', nivel:'',  icono: <FaHtml5/>},
		{nombre: 'Bootstrap', nivel:'',  icono: <FaBootstrap/>},
		{nombre: 'GitHub', nivel:'',  icono: <FaGithub/>}
	],
	trabajos:[
		{
			empresa: 'Saparsa S.A de C.V',
			puesto: 'Full Stack Developer',
			periodo: 'Marzo 2018 - Actualidad',
			ubicacion:'Lerma, Edo Méx',
			img: 'laptop-2588606_1920.jpg',
			actividades: [
				{'descripcion':'Desarrollo web Front End (Angualr Js, React Js) '},
				{'descripcion':'Desarrollo web Back-End (Laravel)'},
				{'descripcion':'Gestión de Cambios'},
				{'descripcion':'Gestión de requerimientos'},
				{'descripcion':'Control de versiones'},
				{'descripcion':'Administración de Base de Datos '},
				{'descripcion':'Instructor Office 365 Básico'},
				{'descripcion':'Mantenimiento de equipo de computo'},
				{'descripcion':'Soporte  técnico'},
				{'descripcion':'Actividades administrativas'}
			]
		},{
			empresa: 'Servicios Malu',
			puesto: 'Auxiliar  de Sistemas',
			periodo: 'Marzo 2018 - Febrero 2017',
			ubicacion:'Lerma Edo Méx',
			img: 'work-731198_1920.jpg',
			actividades: [
				{'descripcion':'Desarrollo de aplicaciones web '},
				{'descripcion':'Desarrollo  aplicaciones de escritorio '},
				{'descripcion':'Versionamiento y control de cambios'},
				{'descripcion':'Gestion de requerimientos'},
				{'descripcion':'Administracón de Base de Datos'}
			]
		}
	],
	estudios:[
		{
			nombre:"Istituto Universitario del Estado de México",
			titulo:"Ing. en Sistemas computacionales",
			ubicacion:"Metepec, Estado de México",
			distinciones:"",
			periodo:"2013 -  2016",
			img:"iuem_logo.png"
		} , {
			nombre:"Colegio Nacional de Educación Profesional Técnica",
			titulo:"PTB. En Mantenimiento de Equipo de Computo",
			ubicacion:"Lerma, Estado de México",
			distinciones:"Alumno de Sistema DUAL",
			periodo:" 2010 -  2013",
			img:"Conalep-logo.png"
		}
	]
};