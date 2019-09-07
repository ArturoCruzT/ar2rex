import React from 'react';
import leftImg from "../../img/triangulo-naranja-patron-geometrico_1182-592.jpg";

const Cintillo = ({imagen, tamaño}) => {
	return (
		<div style={{width: tamaño, backgroundImage: `url(${imagen})`}}>
		</div>
	);
};

export default Cintillo;