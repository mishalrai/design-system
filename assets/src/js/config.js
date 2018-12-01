const cookieName = 'config',
      defaultConfig = { 
            isSideMenuOpened : true,  
            selectedChild : 0 
        };


export const config = ()=> {
    if( Cookies.get(cookieName) ){
        return JSON.parse( Cookies.get(cookieName) );
    }
    Cookies.set(cookieName, JSON.stringify(defaultConfig) );
    return defaultConfig;
}


export const updateConfig = ( name, val ) => {
    let updatedConfig = JSON.stringify( {...config(), [name]:val } );
    Cookies.set( cookieName, updatedConfig );
    return updateConfig;
}

