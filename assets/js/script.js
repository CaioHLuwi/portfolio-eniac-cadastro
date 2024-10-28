let passwordField = document.querySelector('#senha');
let confirmPasswordField = document.querySelector('#confirmar-senha');
let passwordErrorLabel = document.querySelector('#errorPassword')

document.querySelectorAll('.toggle-password').forEach(function(teste) {
    teste.addEventListener('click', function() {
        let passwordField = this.previousElementSibling;

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });
});

confirmPasswordField.addEventListener('keyup', function(evento){
    console.log(evento.key);
    if(confirmPasswordField.value != passwordField.value ){
        passwordErrorLabel.classList.add('ativo');
    } else {
        passwordErrorLabel.classList.remove('ativo');
    };
});

