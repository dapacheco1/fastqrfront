(()=>{"use strict";const e=()=>"\n        <h3>Page Not Found</h3>\n    ",a="https://qrrespuestarapida.dapachecodev.com",t={postContact:`${a}/api/v1/persons`,postDisappeared:`${a}/api/v1/disappeareds`,header:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}},n=async(e,a,t)=>{let n=0,o=0;try{let l=await fetch(e,{method:"POST",mode:"cors",headers:t,body:JSON.stringify(a)});alert("Procesando solicitud, Espere por favor..."),o=await l.json(),n=o.data,0==n?alert("Error al guardar los datos.Intente guardar nuevamente."):alert(o.message)}catch(e){alert("Error al guardar datos. Favor contacte con soporte tecnico."),console.group("Error al momento de procesar solicitud metodo POST"),console.error(e),console.groupEnd()}return n},o={"/":()=>"\n        <h1>Bienvenido al sistema de registros</h1>\n    ","/contacto":()=>`\n    \x3c!-- FORMULARIO DE PERSONAS --\x3e\n    <form action="" class="col-7" enctype="multipart/form-data">\n        \n        <div class="form" id="contacto">\n            <h2>Registro de Contacto</h2>\n            <div class="mb-3">\n                <label for="nombres">Nombres: </label>\n                <input type="text" class="form-control" name="nombres" value="${localStorage.getItem("nombres")?localStorage.getItem("nombres"):""}">\n            </div>\n            <div class="mb-3">\n                <label for="apellidos">Apellidos </label>\n                <input type="text" class="form-control" name="apellidos" value="${localStorage.getItem("apellidos")?localStorage.getItem("apellidos"):""}">\n            </div>\n            <div class="mb-3">\n                <label for="cedula">Cedula </label>\n                <input type="text" class="form-control" name="cedula" value="${localStorage.getItem("cedula")?localStorage.getItem("cedula"):""}">\n            </div>\n            <div class="mb-3">\n                <label for="direccion">Direccion </label>\n                <input type="text" class="form-control" name="direccion" value="${localStorage.getItem("direccion")?localStorage.getItem("direccion"):""}">\n            </div>\n            <div class="mb-3">\n                <label for="celular">Celular: </label>\n                <input type="tel" class="form-control" name="celular" value="${localStorage.getItem("celular")?localStorage.getItem("celular"):""}">\n            </div>\n            <div class="mb-3">\n                <a href="#/desaparecido/" class="btn btn-primary next mt-2">Siguiente <i class="fa-solid fa-angle-right"></i></a>\n                <button type="button" class="btn btn-success saveContact mt-2">Guardar Datos Contacto <i class="fa-solid fa-floppy-disk"></i></button>\n            </div>\n        </div>\n    </form>\n    \n    `,"/desaparecido":()=>(alert("Una vez generado el codigo QR se resetea los campos del formulario."),`\n    \x3c!-- Form del objeto o persona perdida --\x3e\n        <div class="form" id="objPerdido">\n            <h2>Datos de Persona o Mascota Propenso a Desaparecer</h2>\n            <div class="mb-3">\n                <label for="nombresD">Nombres: </label>\n                <input type="text" name="nombresD" class="form-control" value="${localStorage.getItem("nombresD")?localStorage.getItem("nombresD"):""}">\n            </div>\n            <div class="mb-3">\n                <a href="#/contacto/" class="btn btn-primary preview mt-2"><i class="fa-solid fa-angle-left"></i> Atras </a>\n                <button type="button" class="btn btn-success convertBtn mt-2"> Generar codigo QR <i class="fa-solid fa-qrcode"></i></button>\n                <button type="button" class="btn btn-success saveDisappear mt-2">Guardar Datos Desaparecido <i class="fa-solid fa-floppy-disk"></i></button>\n              </div>\n            <div class="mb-3">\n             \n                <div class="d-flex justify-content-center">\n\n                  <div class="result" style="display:none"></div>\n                </div>\n             \n            </div>\n            <div class="mb-3">\n            \n            </div>\n           \n        </div>\n    `),"/soporte":()=>'\n        <h5>Si tiene preguntas acerca del funcionamiento de la plataforma, contacte a la siguiente\n            dirrecion de correo <a href="#">dannypachecodev@hotmail.com</a> o al número de teléfono \n            <a href="tel:0979379671">0979379671</a>\n        </h5>\n    ',"/login":()=>(window.location="#/login",'\n    <form>\n        <h2>Inicio de Sesion QR Respuesta Rapida</h2>\n        <div class="mb-3">\n            <label for="email" class="form-label">Correo electronico</label>\n            <input type="email" class="form-control" id="email" name="email">\n        </div>\n        <div class="mb-3">\n            <label for="password" class="form-label">Contraseña: </label>\n            <input type="password" class="form-control" id="password" name="password">\n        </div>\n        <button type="button" class="btn btn-success login">Iniciar Sesion</button>\n    </form>\n    ')},l=async()=>{const a=document.getElementsByClassName("aside-navbar")[0],l=document.getElementsByClassName("content")[0];if(a.innerHTML=await(()=>{let e='\n        \n        <div class="container">\n        <ul class="row navbar-nav mt-4">\n            <li class="col-12 nav-item">\n            <a class="nav-link text-light index" href="#">Respuesta Rapida QR</a>\n            </li>\n            <li class="col-12 nav-item">\n            <a class="nav-link text-light genQR" href="#/contacto/">\n                <i class="fa-solid fa-qrcode"></i> Generar QR</a\n            >\n            </li>\n            <li class="col-12 nav-item">\n            <a class="nav-link text-light support" href="#/soporte">\n                <i class="fa-solid fa-circle-question"></i> Soporte Tecnico</a\n            >\n            </li>\n        \n\n    ';return localStorage.getItem("token")?e+='\n        <li class="col-12 nav-item">\n            <a class="nav-link text-light exit" href="#/">\n                Salir</a>\n            </li>\n        </ul>\n        </div>':e+="</ul>\n        </div>",e})(),a){const e=document.querySelector(".exit");e&&e.addEventListener("click",(()=>{alert("Cerrando sesion"),localStorage.clear()}))}let s=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",r=await(e=>{let a=localStorage.getItem("token")?localStorage.getItem("token"):void 0;return"/"===e&&null!=a?e:null==a?"/login":null!=a?`/${e}`:void 0})(s),c=o[r]?o[r]:e;l.innerHTML=await c();const i=document.querySelector(".login");i&&i.addEventListener("click",(()=>{let e=new FormData;e.append("email",document.getElementsByName("email")[0].value),e.append("password",document.getElementsByName("password")[0].value),e.append("name","default device"),fetch("https://qrrespuestarapida.dapachecodev.com/api/login",{method:"POST",body:e,mode:"cors"}).then((e=>e.json())).then((e=>console.log(e)))}));const d=document.querySelector(".next"),m=document.querySelector(".preview"),u=document.querySelector(".saveContact"),p=document.querySelector(".saveDisappear"),v=document.querySelector(".imprimir");if(null!=v&&v.setAttribute("style","display:none"),null!=m&&null!=p){const e=document.getElementsByName("nombresD")[0],a=document.querySelector(".convertBtn"),o=document.querySelector(".result"),l=new QRCode(o);a.addEventListener("click",(()=>{const a=`Soy:${e.value}\n Comunicate con ${localStorage.getItem("nombres")} ${localStorage.getItem("apellidos")}\n en: ${localStorage.getItem("direccion")}. Celular: ${localStorage.getItem("celular")}`;v.setAttribute("style","display:block"),o.setAttribute("style","display:block"),l.makeCode(a)})),m.addEventListener("click",(()=>{localStorage.setItem("nombresD",e.value)})),p.addEventListener("click",(async()=>{await n(t.postDisappeared,{person_id:Number(localStorage.getItem("id")),names:e.value,identifier:"XXXX",status:"A"},t.header)}))}if(null!=d&&null!=u){const e=document.getElementsByName("nombres")[0],a=document.getElementsByName("apellidos")[0],o=document.getElementsByName("cedula")[0],l=document.getElementsByName("direccion")[0],s=document.getElementsByName("celular")[0];d.addEventListener("click",(()=>{localStorage.setItem("nombres",e.value),localStorage.setItem("apellidos",a.value),localStorage.setItem("cedula",o.value),localStorage.setItem("direccion",l.value),localStorage.setItem("celular",s.value)})),u.addEventListener("click",(async()=>{let r=await n(t.postContact,{dni:o.value,names:e.value,lastnames:a.value,address:l.value,phoneNumber:s.value,status:"A"},t.header);localStorage.setItem("id",r)}))}};window.addEventListener("load",l),window.addEventListener("hashchange",l)})();