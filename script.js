function sendmail(params) {

    var tempparams = {

        Fromname: document.getElementById("Fromname").value,
        Entertoname: document.getElementById("Entertoname").value,
        Feedback: document.getElementById("Feedback").value,

    };


    emailjs.send('gmail', 'template_bxeg9st', tempparams)
        .then(function(res) {
            console.log("Success", res.status);
        })
}