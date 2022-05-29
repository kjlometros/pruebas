const form = document.getElementById('formulario');

document.addEventListener("DOMContentLoaded", function () {
    form.addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    const user = document.getElementById('usuario');
    if(user.value === "") {
        alert('Debe ingresar un usuario');
        user.focus();
        return;
    }
    const userVálido = user => {
        return /\S+@\S+/.test(user);
    }
    if(!userVálido(user.value)) {
        alert('Debe incluir un @');
        user.focus();
        return;
    }
    const password = document.getElementById('clave');
    if(password.value < 4) {
        alert('Debe ingresar al menos 4 caracteres');
        password.focus();
        return;
    }
    this.submit();
}