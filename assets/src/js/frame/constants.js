
const apiBaseLocation = `${LOCAL.base_url}api/json`;

const routesName = {
    download : 'download',
    config : 'config',
    navigation: 'navigation'
}

export const routes = {
    download : `${apiBaseLocation}/${routesName.download}`,
    config : `${apiBaseLocation}/${routesName.config}`,
    navigation: page => page !== '' ? `${apiBaseLocation}/${routesName.navigation}/${page}` : `${apiBaseLocation}/${routesName.navigation}`
}

export const events = {
    menuUpdate : 'side-menu-updated'
}

export const _toast = {
    defaultSetting : {  progressBar: false, position: 'bottomCenter', animateInside: false },
    makeParam( obj ){
        return Object.assign( {}, this.defaultSetting, obj );
    }
}