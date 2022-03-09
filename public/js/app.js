document.addEventListener("DOMContentLoaded", async function(event) {
    const url = window.location.href;
    
    if(url.includes("css=true")) {
        await Swal.fire({
            title: 'Success',
            text: 'Your message has been sent successfully',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        window.location.href = "/index.html";
    }

    if(url.includes("error")) {
        const delimString = `?error=`;
        const errorString = url.split(delimString)[1];
        const errorStringDecoded = atob(errorString);
        
        let splitErrs = errorStringDecoded.split(",");
        let errString = ``;

        for(const err of splitErrs) {
            errString += `<p>${err}</p><br>`;
        }

        await Swal.fire({
            title: 'Oops...',
            html: errString,
            icon: 'error',
            confirmButtonText: 'Ok'
        })

        location.href = '/contact.html';
    }
})