
export default class Download{

    constructor() {

        this.form = '#download-file';
        this.url = LOCAL.base_url + 'api/json/download';
        this.sampleData = 'user=person&pwd=password&organization=place&requiredkey=key';
        
        this.handleSubmit();
    }

    handleSubmit(){
        const $downloadForm = $(this.form);

        if( $downloadForm.length ){
            $downloadForm.on('submit', e=>{
                e.preventDefault();
                this.downloadFile(
                    {
                        method: 'POST',
                        url: this.url,
                        data: `data=${this.makePayload()}`
                    },
                    $downloadForm.attr('data-file-name')
                )
            })
        }

    }


    makePayload(){
        let tempArr = [];
        $(this.form).find('[name]').each((i, e) => {
            let name = $(e).attr('name');
            if (name.length && $(e).prop("checked")) {
                let value = $(e).val();
                tempArr = [...tempArr, name]
            }   
        })
        return JSON.stringify(tempArr);
    }


    downloadFile( {method, url, data}, fileName ){
        
        var request = new XMLHttpRequest();
            request.open(method, url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.responseType = 'blob';

        var disposition = request.getResponseHeader('content-disposition');
        var matches = /"([^"]*)"/.exec(disposition);
        var filename = (matches != null && matches[1] ? matches[1] : `${fileName}.zip`);

        // The actual download
        request.onload = function() {
            var blob = new Blob([request.response], { type: 'octet/stream' });
            var link = document.createElement('a');

            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        // Temp solution 
        request.send( data );
    }

}