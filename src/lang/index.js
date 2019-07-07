const locale = process.env.REACT_APP_LOCALE;
console.log(locale);
let langs = {};
let fueron_cargadas = false;

//Cargando el archivo basándose en el locale
import(`./${locale}/index`).then(traducciones => {
    langs = traducciones;
    console.log(`./${locale}/index`, langs);
    fueron_cargadas = true;
});


/**
 * Devuelve la traduccion de la llave buscada basándose en el locale
 * @param buscado Ejemplo 'catalogos.nombre'
 * @returns {*}
 */
export const get = (buscado) => {
    let [modulo, key] = buscado.split('.');
    return ((langs || {})[modulo] || {})[key] || buscado;
};

export const fueronCargadas = () => fueron_cargadas;

export const cargarLang = (esCargado) => {
    import(`./${locale}/index`).then(traducciones => {
        langs = traducciones;
        esCargado(true);
    });
};

export const getAll = () => langs;
