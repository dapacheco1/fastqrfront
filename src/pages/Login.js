const Login = ()=>{
    window.location = '#/login';
    const view = `
    <form>
        <h2>Inicio de Sesion QR Respuesta Rapida</h2>
        <div class="mb-3">
            <label for="email" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="email" name="email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña: </label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <button type="button" class="btn btn-success login">Iniciar Sesion</button>
    </form>
    `;

    return view;
};

export {Login};