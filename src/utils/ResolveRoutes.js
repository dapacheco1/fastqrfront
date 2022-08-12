const ResolveRoutes = (route)=>{
    if(route === '/'){
        return route;
    }else{

        return `/${route}`;
    }
}

export {ResolveRoutes};