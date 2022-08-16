import { Welcome } from "../pages/Welcome";
import {Error404} from "../pages/Error404";
import {Navbar} from "../templates/Navbar";
import {GenerarQR} from "../pages/GenerarQR";
import { ResolveRoutes } from "../utils/ResolveRoutes";
import {getHash} from "../utils/getHash";
import {Support} from "../pages/Support";
import { FormDesaparecido } from "../pages/FormDesaparecido";
import { FetchOptions } from "../utils/FetchOptions";
import { Post } from "../utils/Post";
import { Login } from "../pages/Login";
import { RequestToken } from "../utils/RequestToken";

const routes = {
    '/':Welcome,
    '/contacto':GenerarQR,
    '/desaparecido':FormDesaparecido,
    '/soporte':Support,
    '/login':Login,
};
        

//creo el manejador de rutas

const router = async ()=>{
    const navbar = null || document.getElementsByClassName('aside-navbar')[0];
    const content = null || document.getElementsByClassName('content')[0];
    


    //renderizado
    navbar.innerHTML = await Navbar();
    if(navbar){
        const exit = document.querySelector('.exit');
        if(exit){

            exit.addEventListener('click',()=>{
                alert("Cerrando sesion");
                localStorage.clear();
            });
        }
    }

    let hash = getHash();
    let route = await ResolveRoutes(hash);
    let render = routes[route] ? routes[route]:Error404;
    content.innerHTML = await render();

    //login button

    const login = document.querySelector('.login');
    if(login){
        login.addEventListener('click',()=>{
            let email = document.getElementsByName('email')[0].value;
            let password = document.getElementsByName('password')[0].value;

            if(email==null || email=="" ||password==null ||password=="" ){
                alert("Favor rellene todos los campos");
            }else{

                const hostname= "https://qrrespuestarapida.dapachecodev.com";
                let data = new FormData();
                data.append("email",document.getElementsByName('email')[0].value);
                data.append("password",document.getElementsByName('password')[0].value);
                data.append("name",window.navigator.userAgent);
                RequestToken(hostname+'/api/login',data);
            }
            
        });
    }

    //botones next,prev
    const next = document.querySelector('.next');
    const preview = document.querySelector('.preview');

    //botones de guardado de contactos
    const saveContact = document.querySelector('.saveContact');
    const saveDisappear = document.querySelector('.saveDisappear');
    
    //boton de imprimir qr
    const imprimir = document.querySelector('.imprimir');

    //accion imprimir
    if(imprimir!=null){
        imprimir.setAttribute("style","display:none");
    }

    //acciones formulario desaparecido
    if(preview!=null &&saveDisappear!=null){
        //input y botones
        const nombresD = document.getElementsByName('nombresD')[0];
        const convertBtn = document.querySelector('.convertBtn');
        
        //resultado
        const result = document.querySelector('.result');
        
        //logica qr
        const QR = new QRCode(result);
        convertBtn.addEventListener('click',()=>{
            const data = `Soy:${nombresD.value}
 Comunicate con ${localStorage.getItem("nombres")} ${localStorage.getItem("apellidos")}
 en: ${localStorage.getItem("direccion")}. Celular: ${localStorage.getItem("celular")}`;
            imprimir.setAttribute("style","display:block");
            result.setAttribute("style", "display:block");
            QR.makeCode(data);
            
            //localStorage.clear();
        });

        //acciones boton atras
        preview.addEventListener('click',()=>{
            localStorage.setItem("nombresD",nombresD.value);
        });

        //acciones boton guardar desaparecido
        saveDisappear.addEventListener('click',async()=>{
            let token = localStorage.getItem("token");
            FetchOptions.header.Authorization = token;
            let response = await Post(FetchOptions.postDisappeared,{
                person_id: Number(localStorage.getItem("id")),
                names: nombresD.value,
                identifier: "XXXX",
                status: "A",
            },FetchOptions.header);
        });
    }

    if(next!=null && saveContact!=null){

        const nombres = document.getElementsByName('nombres')[0];
        const apellidos = document.getElementsByName('apellidos')[0];
        const cedula = document.getElementsByName('cedula')[0];
        const direccion = document.getElementsByName('direccion')[0];
        const celular = document.getElementsByName('celular')[0];

        next.addEventListener('click',()=>{
            localStorage.setItem("nombres",nombres.value);
            localStorage.setItem("apellidos",apellidos.value);
            localStorage.setItem("cedula",cedula.value);
            localStorage.setItem("direccion",direccion.value);
            localStorage.setItem("celular",celular.value);
        });

        saveContact.addEventListener('click',async()=>{
            let token = localStorage.getItem("token");
            FetchOptions.header.Authorization = token;
            let id =  await Post(FetchOptions.postContact,{
                dni: cedula.value,
                names: nombres.value,
                lastnames: apellidos.value,
                address: direccion.value,
                phoneNumber: celular.value,
                status: "A",
            },FetchOptions.header);
            localStorage.setItem("id",id);
        });

    }
        

};

export {router};