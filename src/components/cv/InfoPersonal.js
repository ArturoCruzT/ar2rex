import React from 'react';


const InfoPersonal = ({info, Background}) => {
	return (
		<div style={{
			backgroundImage: `url(${Background})`,
			'border-right': "5px solid #ff6f00"
		}}>
			<div>
				<div className="text-center">
					<h2 style={{'border-bottom': '5px solid #0d47a1'}}>
						Contacto
					</h2>
				</div>
				{
					(info.contacto || []).map((registro, index) =>
						<div key={`con${index}`}>
							<RenglonPersonal
								titulo={registro.nombre}
								texto={registro.descripcion}
								icon={registro.icono}
							/>
						</div>
					)
				}
				
				
				<div className="text-center">
					<h2 style={{'border-bottom': '5px solid #0d47a1'}}>
						Habilidades
					</h2>
				</div>
				{
					(info.habilidades || []).map(habilidad =>
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
				{
					(info.idiomas || []).map((idiomas, index) =>
						<div key={`id${index}`}>
							<RenglonPersonal
								titulo={idiomas.nombre}
								texto={idiomas.nivel}
								icon=""
							/>
						</div>
					)
				}
			</div>
		</div>
	);
};

const RenglonPersonal = ({titulo, texto, icon}) => {
	return (
		<div className="d-flex justify-content-between py-2 pr-2">
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

export default InfoPersonal;