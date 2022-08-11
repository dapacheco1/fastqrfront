const Navbar =()=>{
    const view = `

        <div class="container">
        <ul class="row navbar-nav mt-4">
            <li class="col-12 nav-item">
            <a class="nav-link text-light index" href="#">Respuesta Rapida QR</a>
            </li>
            <li class="col-12 nav-item">
            <a class="nav-link text-light genQR" href="#">
                <i class="fa-solid fa-qrcode"></i> Generar QR</a
            >
            </li>
            <li class="col-12 nav-item">
            <a class="nav-link text-light support" href="#">
                <i class="fa-solid fa-circle-question"></i> Soporte Tecnico</a
            >
            </li>
        </ul>
        </div>

    `;
    return view;
};

export {Navbar};