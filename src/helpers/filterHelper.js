const filtrarArreglo = (arr_sin_filtrar, buscado) => {
    const filtrar = (obj_buscado) => {
        return cumpleCriteria(obj_buscado, buscado);
    };

    let nuevo_arr = arr_sin_filtrar != null ? arr_sin_filtrar.filter(filtrar) : arr_sin_filtrar;
    return nuevo_arr;
};


const cumpleCriteria = (obj, busco) => {
    let cumple = true;
    if (typeof busco === 'undefined' || busco == null || typeof obj === 'undefined' || obj == null) return true;
    Object.keys(busco).forEach((prop) => {
        if (cumple && typeof obj[prop] !== 'undefined' && obj[prop] !== null) {
            if (typeof obj[prop] === 'object') {
                cumple = cumpleCriteria(obj[prop], busco[prop]);
            } else {
                const searched_value = busco[prop].toLowerCase();
                const valor_existente = obj[prop] + '';
                cumple = valor_existente.toLowerCase().includes(searched_value);
            }
        } else {
            cumple = false;
        }
    });
    return cumple;
};

export default filtrarArreglo;
