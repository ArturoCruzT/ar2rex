import Swal from 'sweetalert2';
import * as lang from '../lang/index';

// |------Predefinidos------| //
export const cargando = () => {
    return staticPlain(lang.get('general.cargando'), lang.get('general.espereCargando'));
};

export const errorCargar = () => {
    return ocultableDanger(lang.get('general.errorAlCargar'), lang.get('general.error'));
};

export const errorGuardar = () => {
    return ocultableDanger(lang.get('general.errorAlGuardar'), lang.get('general.error'));
};

export const cargadoCorrecto = () => {
    return ocultableSuccess(lang.get('general.cargadoCorrecto'), lang.get('general.correcto'));
};

export const guardadoCorrecto = () => {
    return ocultableSuccess(lang.get('general.guardadoCorrecto'), lang.get('general.correcto'));
};

export const seguroContinuar = () => {
    return confirmar('warning', lang.get('general.operacionNoRevertir'), lang.get('general.estaSeguro'));
};

// |------Genericas------| //
export const cerrarAlert = () => {
    Swal.close();
};

// |------Ocultables-------| //
export const ocultableSuccess = (mensaje, titulo = lang.get('general.exito'), segundos = 3000) => {
    return ocultable('success', mensaje, titulo, segundos);
};

export const ocultableDanger = (mensaje, titulo = lang.get('general.error'), segundos = 3000) => {
    return ocultable('error', mensaje, titulo, segundos);
};

export const ocultableWarning = (mensaje, titulo = lang.get('general.error'), segundos = 3000) => {
    return ocultable('warning', mensaje, titulo, segundos);
};

export const ocultableInfo = (mensaje, titulo = lang.get('general.error'), segundos = 3000) => {
    return ocultable('info', mensaje, titulo, segundos);
};

const ocultable = (type, mensaje, titulo, segundos = 3000) => {
    const options = {
        title: titulo,
        type: type,
        html: mensaje,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        timer: segundos
    };
    return Swal.fire(options);
};

// |------Estáticos-------| //
const staticSuccess = (mensaje, titulo = lang.get('general.exito')) => {
    return estatico('success', mensaje, titulo);
};

const staticDanger = (mensaje, titulo = lang.get('general.error')) => {
    return estatico('error', mensaje, titulo);
};

const staticWarning = (mensaje, titulo = lang.get('general.error')) => {
    return estatico('warning', mensaje, titulo);
};

const staticInfo = (mensaje, titulo = lang.get('general.error')) => {
    return estatico('info', mensaje, titulo);
};

const staticPlain = (mensaje, titulo = lang.get('general.error')) => {
    const options = {
        title: titulo,
        type: '',
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        onOpen: () => {
            Swal.showLoading()
        },
    };
    return Swal.fire(options);
};

export const estatico = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        type: type,
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    };
    return Swal.fire(options);
};

// |------Estáticos ocultables-------| //
export const staticOcultableSuccess = (mensaje, titulo = lang.get('general.exito')) => {
    return estaticoOcultable('success', mensaje, titulo);
};

export const staticOcultableDanger = (mensaje, titulo = lang.get('general.error')) => {
    return estaticoOcultable('error', mensaje, titulo);
};

export const staticOcultableWarning = (mensaje, titulo = lang.get('general.error')) => {
    return estaticoOcultable('warning', mensaje, titulo);
};

export const staticOcultableInfo = (mensaje, titulo = lang.get('general.error')) => {
    return estaticoOcultable('info', mensaje, titulo);
};

export const staticOcultablePlain = (mensaje, titulo = lang.get('general.error')) => {
    const options = {
        title: titulo,
        type: '',
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        onOpen: () => {
            Swal.showLoading()
        },
    };
    return Swal.fire(options);
};

export const estaticoOcultable = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        type: type,
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    };
    return Swal.fire(options);
};

export const confirmar = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        type: type,
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true
    };
    return Swal.fire(options);
};


