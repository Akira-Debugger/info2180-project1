document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');
    let display_email=document.querySelector('.message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let forminput=document.getElementById('email').value;
        if(forminput =='') {
         display_email.textContent = "Please enter a valid email address.";

        }else {
            display_email.textContent = "Thank you for subscribing to our newsletter, " + forminput + "!";

        }

    });

});