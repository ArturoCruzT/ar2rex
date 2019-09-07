import React from 'react';


const Encabezado = ({info, foto, Background}) => {
	return (
		<div className="d-flex justify-content-around py-3" style={{backgroundImage: `url(${Background})`}}>
			<div>
				<img src={foto} className="d-block  rounded-circle" height={200} width={200}
					 alt="First slide"/>
			</div>
			<div>
				<div>
					<h5 className="text-center"> {info.titulo} </h5>
					<h1 className="text-center"> {info.nombre} </h1>
				</div>
				<div className="d-flex justify-content-between">
					<div>
						<h3><strong> {info.puesto}</strong></h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Encabezado;