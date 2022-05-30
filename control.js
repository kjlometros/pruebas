const user = document.getElementById('usuario');
const password = document.getElementById('clave');
const btn = document.getElementById('boton');

const validarCampos = (user, password) => {
    user.setCustomValidity('')
    password.setCustomValidity('')
    if(user.value === "") {
       user.setCustomValidity('Este campo no puede estar vacío');
    } else if (user.value.indexOf('@') == -1) {
        user.setCustomValidity('El campo debe contener un @');
    }
    else if(password.value === "") {
        password.setCustomValidity('Complete este campo');
    }
}

btn.addEventListener('click', (e) => {
    validarCampos(user, password);
})