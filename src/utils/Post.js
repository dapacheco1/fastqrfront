const Post = async (url, data,header) =>{
    let id = 0;
    let dataResponse = 0;
    try{
      let response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: header,
        body: JSON.stringify(data),
      });
    
      alert("Procesando solicitud, Espere por favor...");
    
      dataResponse = await response.json();
      
      id = dataResponse.data;
      if(id==0){
        alert("Error al guardar los datos.Intente guardar nuevamente.");
      }else{
        alert(dataResponse.message);
      }
      
    }catch(e){
      alert("Error al guardar datos. Favor contacte con soporte tecnico.");
      console.group("Error al momento de procesar solicitud metodo POST");
      console.error(e);
      console.groupEnd();
    }
    
    return id;
    
};

export {Post};