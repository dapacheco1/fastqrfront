import { Welcome } from "../pages/Welcome";
import {Error404} from "../pages/Error404";
import {Navbar} from "../templates/Navbar";

const routes = {
    '/':Welcome,
    '/generarQR':'generarQR',
};


//creo el manejador de rutas

const router = async ()=>{
    const navbar = null || document.getElementsByClassName('aside-navbar')[0];
    const content = null || document.getElementsByClassName('content')[0];

    navbar.innerHTML = await Navbar();
};

export {router};