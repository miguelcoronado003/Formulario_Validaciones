    // Función para limpiar el formulario
    function formClearAndValidate() {
        const validador = new ValidarFormulario();
        const resultados = validador.validarFormulario();
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.innerHTML = ''; // Limpia los mensajes anteriores

        let formularioValido = true;

        resultados.forEach(resultado => {
            const resultadoObj = JSON.parse(resultado);
            const mensaje = document.createElement('p');
            mensaje.textContent = `${resultadoObj.campo}: ${resultadoObj.mensaje}`;
            if (resultadoObj.status === 'error') {
                mensaje.classList.add('text-danger');
                formularioValido = false;
            } else {
                mensaje.classList.add('text-success');
            }
            mensajeDiv.appendChild(mensaje);
        });

        if (formularioValido) {
            formEnable();  // Habilita todos los campos
            document.getElementById('formulario').reset();  // Limpia el formulario
        }
    }
    
    // Función para habilitar todos los campos del formulario
    function formEnable() {
        document.querySelectorAll('input, select').forEach(element => {
            element.disabled = false;
        });
    }
    
    // Función para inhabilitar todos los campos del formulario
    function formDisable() {
        document.querySelectorAll('input, select').forEach(element => {
            element.disabled = true;
        });
    }
    
    // Función para inhabilitar la edición de algunos campos
    function formDisableEdit() {
        const camposNoEditables = ['nombre', 'fechaNacimiento', 'numeroDocumento'];
        camposNoEditables.forEach(id => {
            document.getElementById(id).disabled = true;
        });
    
    }

    // Función para limpiar el formulario y habilitar los campos al enviar
    function formClearAndValidate() {
        const validador = new ValidarFormulario();
        const resultados = validador.validarFormulario();
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.innerHTML = ''; // Limpia los mensajes anteriores
    
        let formularioValido = true;
    
        resultados.forEach(resultado => {
            const resultadoObj = JSON.parse(resultado);
            const mensaje = document.createElement('p');
            mensaje.textContent = `${resultadoObj.campo}: ${resultadoObj.mensaje}`;
            if (resultadoObj.status === 'error') {
                mensaje.classList.add('text-danger');
                formularioValido = false;
            } else {
                mensaje.classList.add('text-success');
            }
            mensajeDiv.appendChild(mensaje);
        });
    
        if (formularioValido) {
            formEnable();  // Habilita todos los campos
            document.getElementById('formulario').reset();  // Limpia el formulario
        }
    }

    // Función para deshabilitar los campos si el usuario es menor de 18 años
    function verificarEdad() {
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const validador = new ValidarFormulario();
        const edad = validador.calcularEdad(fechaNacimiento);

        if (edad < 18) {
            document.querySelectorAll('input, select').forEach(element => {
                if (element.id !== 'fechaNacimiento') {
                    element.disabled = true;  // Deshabilita todos menos la fecha de nacimiento
                }
            });
        } else {
            formEnable();  // Habilita todos los campos si es mayor de 18
        }
    }

    // Función para cambiar el fondo del formulario al color seleccionado
    function cambiarFondo() {
        const colorFavorito = document.getElementById('colorFavorito').value;
        document.body.style.backgroundColor = colorFavorito;  // Cambia el fondo de la página completa
    }

// Event listener para validar edad y deshabilitar campos si es necesario
document.getElementById('fechaNacimiento').addEventListener('mouseout', verificarEdad);

// Event listener para cambiar el fondo según el color favorito
document.getElementById('colorFavorito').addEventListener('mouseout', cambiarFondo);

// Event listener
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    formClearAndValidate();  // Limpia, valida y habilita los campos
});