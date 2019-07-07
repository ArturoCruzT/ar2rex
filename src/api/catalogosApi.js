import API from './axios';
import {setEmpaques} from "../redux/actions";

export const cargarEmpaques = () => {
    return (dispatch, getState) => {
        API.post('catalogos/getAllEmpaques').then((res) => {
            dispatch(setEmpaques(res.data));
        });
    }
};

export const getAllEmpaquesss = (callback) => {
    API.post('catalogos/getAllPermisos', {relaciones:'seccion'}).then((res) => {
        console.log("Carga correcta");
        callback({status:200, data:res.data});
    }).catch((err) => {
        callback({status:500, data:[]});
    }).then((a) => {
        console.log("QUe ondaaa");
    });
};

export const guardarEmpaqueee = (empaque, callback) => {
    API.post('catalogos/guardarEmpaque', {...empaque}).then((res) => {
        console.log("Carga correcta");
        callback({status:200, data:res.data});
    }).catch((err) => {
        callback({status:500, data:[]});
    }).then((a) => {
        console.log("QUe ondaaa");
    });
};

export const getAllPermisosss = (callback) => {
    API.post('catalogos/getAllPermisos',{relaciones: ['seccion']}).then((res) => {
        console.log("Carga correcta");
        callback({status:200, data:res.data});
    }).catch((err) => {
        callback({status:500, data:[]});
    }).then((a) => {
        console.log("QUe ondaaa");
    });
};

export const guardarPermisooo = (permiso, callback) => {
    API.post('catalogos/guardarPermiso', {...permiso}).then((res) => {
        console.log("Carga correcta");
        callback({status:200, data:res.data});
    }).catch((err) => {
        callback({status:500, data:[]});
    }).then((a) => {
        console.log("QUe ondaaa");
    });
};


export const getAllSeccionnn = (callback) => {
    API.post('catalogos/getAllSeccionesPermiso').then((res) => {
        console.log("Carga correcta");
        callback({status:200, data:res.data});
    }).catch((err) => {
        callback({status:500, data:[]});
    }).then((a) => {
        console.log("QUe ondaaa");
    });
};