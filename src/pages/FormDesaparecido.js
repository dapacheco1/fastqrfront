const FormDesaparecido = () =>{
    
    let nombresD = localStorage.getItem("nombresD")?localStorage.getItem("nombresD"):"";

    const view = `
    <!-- Form del objeto o persona perdida -->
        <div class="form" id="objPerdido">
            <h2>Datos de Persona o Mascota Propenso a Desaparecer</h2>
            <div class="mb-3">
                <label for="nombresD">Nombres: </label>
                <input type="text" name="nombresD" class="form-control" value="${nombresD}">
            </div>
            <div class="mb-3">
                <a href="#/contacto/" class="btn btn-primary preview mt-2"><i class="fa-solid fa-angle-left"></i> Atras </a>
                <button type="button" class="btn btn-success convertBtn mt-2"> Generar codigo QR <i class="fa-solid fa-qrcode"></i></button>
                <button type="button" class="btn btn-success saveDisappear mt-2">Guardar Datos Desaparecido <i class="fa-solid fa-floppy-disk"></i></button>
              </div>
            <div class="mb-3">
             
                <div class="d-flex justify-content-center">

                  <div class="result" style="display:none"></div>
                </div>
             
            </div>
            <div class="mb-3">
            
            </div>
           
        </div>
    `;
    return view;
};

export {FormDesaparecido};