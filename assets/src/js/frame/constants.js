
const apiBaseLocation = `${LOCAL.base_url}api/json`;

export const routes = {
    download : `${apiBaseLocation}/download`,
    config : `${apiBaseLocation}/config`,
    navigation: ( page )=> page !== '' ? `${apiBaseLocation}/navigation/${page}` : `${apiBaseLocation}/navigation`
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