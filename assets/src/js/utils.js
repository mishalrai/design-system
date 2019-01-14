export const makePayload = (ele) => {
    let obj = {};

    $(ele).find('[name]').each((i, e) => {
        let name = $(e).attr('name');
        if (name.length && name !== 'name') {
            let value = $(e).val();
            obj[name] = value;
        } else if (name.length && name === 'name') {
            extraInfo[name] = $(e).val();
        }
    })
        
    return obj;
}