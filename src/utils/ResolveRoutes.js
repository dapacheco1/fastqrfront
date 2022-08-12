const ResolveRoutes = (route)=>{
    let token = localStorage.getItem("token")?localStorage.getItem("token"):undefined;
    if(route === '/' && token!=undefined){
        return route;
    }else if(token==undefined){
        return `/login`;
    }else if(token!=undefined){

        return `/${route}`;
    }
}

export {ResolveRoutes};