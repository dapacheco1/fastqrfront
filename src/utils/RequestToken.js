const RequestToken = async(url,data)=>{
    let dataResponse = "";
    try{
        let response = await fetch(url,{
            method:'POST',
            body:data,
        })
        alert("Procesando solicitud, Espere por favor...");
        dataResponse = await response.json();
        alert("Acceso al sistema: "+dataResponse.message);
            if(dataResponse.token){
                localStorage.setItem("token",dataResponse.token);
                window.location = '#/contacto';
            }
        
    }catch(e){
        alert("Error al solicitar token. Favor contacte con soporte tecnico.");
        console.group("Error al momento de procesar solicitud metodo POST");
        console.error(e);
        console.groupEnd();
    }
};

export {RequestToken};