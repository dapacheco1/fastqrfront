const GenerarQR = () =>{
    let nombres = localStorage.getItem("nombres")?localStorage.getItem("nombres"):"";
    let apellidos = localStorage.getItem("apellidos")?localStorage.getItem("apellidos"):"";
    let cedula = localStorage.getItem("cedula")?localStorage.getItem("cedula"):"";
    let direccion = localStorage.getItem("direccion")?localStorage.getItem("direccion"):"";
    let celular = localStorage.getItem("celular")?localStorage.getItem("celular"):"";

    const view = `
    <!-- FORMULARIO DE PERSONAS -->
    <form action="" class="col-7" enctype="multipart/form-data">
        
        <div class="form" id="contacto">
            <h2>Registro de Contacto</h2>
            <div class="mb-3">
                <label for="nombres">Nombres: </label>
                <input type="text" class="form-control" name="nombres" value="${nombres}">
            </div>
            <div class="mb-3">
                <label for="apellidos">Apellidos </label>
                <input type="text" class="form-control" name="apellidos" value="${apellidos}">
            </div>
            <div class="mb-3">
                <label for="cedula">Cedula </label>
                <input type="text" class="form-control" name="cedula" value="${cedula}">
            </div>
            <div class="mb-3">
                <label for="direccion">Direccion </label>
                <input type="text" class="form-control" name="direccion" value="${direccion}">
            </div>
            <div class="mb-3">
                <label for="celular">Celular: </label>
                <input type="tel" class="form-control" name="celular" value="${celular}">
            </div>
            <div class="mb-3">
                <a href="#/desaparecido/" class="btn btn-primary next mt-2">Siguiente <i class="fa-solid fa-angle-right"></i></a>
                <button type="button" class="btn btn-success saveContact mt-2">Guardar Datos Contacto <i class="fa-solid fa-floppy-disk"></i></button>
            </div>
        </div>
    </form>
    
    `;
    return view;
};

export {GenerarQR};