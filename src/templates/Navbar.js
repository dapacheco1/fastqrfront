const Navbar =()=>{
    let view = `
        <style>
        
.bg-color{
    background: #fdf8ff;
}

.aside-navbar{
    background: #12131c;
    color:rgb(206, 206, 206);
    height: 100vh;
}

.nav-item{
    transition: all 250ms ease-in;
}

.nav-item:hover{
    background: #38383a;
    
}

        </style>
        <div class="container">
        <ul class="row navbar-nav mt-4">
            <li class="col-12 nav-item">
            <a class="nav-link text-light index" href="#">Respuesta Rapida QR</a>
            </li>
            <li class="col-12 nav-item">
            <a class="nav-link text-light genQR" href="#/contacto/">
                <i class="fa-solid fa-qrcode"></i> Generar QR</a
            >
            </li>
            <li class="col-12 nav-item">
            <a class="nav-link text-light support" href="#/soporte">
                <i class="fa-solid fa-circle-question"></i> Soporte Tecnico</a
            >
            </li>
        

    `;
    if(localStorage.getItem("token")){

        view += `
        <li class="col-12 nav-item">
            <a class="nav-link text-light exit" href="#/">
                Salir</a>
            </li>
        </ul>
        </div>`;
        
    }else{
        view+=`</ul>
        </div>`
    }
    return view;
};

export {Navbar};