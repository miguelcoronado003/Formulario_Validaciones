class ValidarFormulario {

    // Método para validar el nombre y apellido
    validarNombre(nombre) {
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,100}$/;
        const input = document.getElementById('nombre');
        if (!regexNombre.test(nombre)) {
            input.style.borderColor = 'red';  // Aplica borde rojo en caso de error
            return JSON.stringify({ status: 'error', campo: 'nombre', mensaje: 'El nombre debe tener entre 3 y 100 caracteres y solo puede contener letras.' });
        }
        input.style.borderColor = 'green';  // Aplica borde verde en caso de éxito
        return JSON.stringify({ status: 'success', campo: 'nombre', mensaje: 'Nombre válido.' });
    }


    // Método para validar el correo electrónico
    validarCorreo(correo) {
        const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const input = document.getElementById('correo');
        if (!regexCorreo.test(correo)) {
            input.style.borderColor = 'red';
            return JSON.stringify({ status: 'error', campo: 'correo', mensaje: 'Debes ingresar un correo electrónico válido.' });
        }
        input.style.borderColor = 'green';
        return JSON.stringify({ status: 'success', campo: 'correo', mensaje: 'Correo válido.' });
    }

    // Método para validar la contraseña
    validarContrasena(contrasena) {
        const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const input = document.getElementById('contrasena');
        if (!regexContrasena.test(contrasena)) {
            input.style.borderColor = 'red';
            return JSON.stringify({ 
                status: 'error', 
                campo: 'contrasena', 
                mensaje: 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula, un número y un carácter especial.' 
            });
        }
        input.style.borderColor = 'green';
        return JSON.stringify({ 
            status: 'success', 
            campo: 'contrasena', 
            mensaje: 'Contraseña válida.' 
        });
    }
    
    // Método para validar la edad automática según la fecha de nacimiento
    calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const fecha = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fecha.getFullYear();
        const mes = hoy.getMonth() - fecha.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
            edad--;
        }
        return edad;
    }

    validarFechaNacimiento(fechaNacimiento) {
        // Verificar si el campo está vacío
        if (!fechaNacimiento) {
            return JSON.stringify({ 
                status: 'error', 
                campo: 'Fecha de nacimiento', 
                mensaje: 'Debes ingresar una fecha de nacimiento válida.' 
            });
        }
    
        const edad = this.calcularEdad(fechaNacimiento);
        if (edad < 18) {
            return JSON.stringify({ 
                status: 'error', 
                campo: 'Fecha de nacimiento', 
                mensaje: 'Debes tener al menos 18 años.' 
            });
        }
    
        // Actualiza el slider y la visualización de la edad
        document.getElementById('edadSlider').value = edad;
        document.getElementById('edadDisplay').textContent = edad;
    
        return JSON.stringify({ 
            status: 'success', 
            campo: 'Fecha de nacimiento', 
            mensaje: 'Fecha de nacimiento válida.' 
        });
    }

    calcularEdad(fechaNacimiento) {
        const hoy = new Date();
        const fecha = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fecha.getFullYear();
        const mes = hoy.getMonth() - fecha.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
            edad--;
        }
        return edad;
    }

    // Método para validar el tipo de documento
// Método actualizado para validar el tipo de documento
    validarTipoDocumento(tipoDocumento, edad) {
        const input = document.getElementById('tipoDocumento');
        if (tipoDocumento === "TI" && edad >= 18) {
            input.style.borderColor = 'red';  // Pone borde rojo si hay error
            return JSON.stringify({ status: 'error', campo: 'Tipo de documento', mensaje: 'La Tarjeta de Identidad es solo para menores de edad.' });
        }
        if (tipoDocumento === "") {
            input.style.borderColor = 'red';
            return JSON.stringify({ status: 'error', campo: 'Tipo de documento', mensaje: 'Debes seleccionar un tipo de documento.' });
        }
        input.style.borderColor = 'green';  // Pone borde verde si es válido
        return JSON.stringify({ status: 'success', campo: 'Tipo de documento', mensaje: 'Tipo de documento válido.' });
    }

    // Método para validar el número de documento
    validarNumeroDocumento(numeroDocumento) {
        const regexNumero = /^\d{10,}$/;
        const input = document.getElementById('numeroDocumento');
        if (!regexNumero.test(numeroDocumento)) {
            input.style.borderColor = 'red';
            return JSON.stringify({ status: 'error', campo: 'Numero de documento', mensaje: 'El número de documento debe tener al menos 10 dígitos y contener solo números.' });
        }
        input.style.borderColor = 'green';
        return JSON.stringify({ status: 'success', campo: 'Numero de documento', mensaje: 'Número de documento válido.' });
    }

    // Método para validar el género
    validarGenero(genero) {
        const input = document.getElementById('genero');
        if (genero === "") {
            input.style.borderColor = 'red';
            return JSON.stringify({ status: 'error', campo: 'genero', mensaje: 'Debes seleccionar un género.' });
        }
        input.style.borderColor = 'green';
        return JSON.stringify({ status: 'success', campo: 'genero', mensaje: 'Género válido.' });
    }

    // Método para validar que se seleccione un hobbie
    validarHobbie(hobbie) {
        const inputs = document.getElementsByName('hobbie');
        if (hobbie === null) {
            inputs.forEach(input => input.style.borderColor = 'red');
            return JSON.stringify({ status: 'error', campo: 'hobbie', mensaje: 'Debes seleccionar un hobbie.' });
        }
        inputs.forEach(input => input.style.borderColor = 'green');
        return JSON.stringify({ status: 'success', campo: 'hobbie', mensaje: 'Hobbie válido.' });
    }

    // Método para validar que se seleccione al menos una habilidad
    validarHabilidad() {
        const habilidades = document.querySelectorAll('input[name="habilidad"]:checked');
        const inputs = document.getElementsByName('habilidad');
        if (habilidades.length < 1) {
            inputs.forEach(input => input.style.borderColor = 'red');
            return JSON.stringify({ status: 'error', campo: 'habilidad', mensaje: 'Debes seleccionar al menos una habilidad.' });
        }
        inputs.forEach(input => input.style.borderColor = 'green');
        return JSON.stringify({ status: 'success', campo: 'habilidad', mensaje: 'Habilidades válidas.' });
    }

  // Método para validar todo el formulario
  validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const numeroDocumento = document.getElementById('numeroDocumento').value;
    const genero = document.getElementById('genero').value;
    const hobbie = document.querySelector('input[name="hobbie"]:checked');
    const edad = this.calcularEdad(fechaNacimiento);

    let resultados = [];

    resultados.push(this.validarNombre(nombre));
    resultados.push(this.validarCorreo(correo));
    resultados.push(this.validarContrasena(contrasena)); 
    resultados.push(this.validarFechaNacimiento(fechaNacimiento));
    resultados.push(this.validarTipoDocumento(tipoDocumento, edad));
    resultados.push(this.validarNumeroDocumento(numeroDocumento));
    resultados.push(this.validarGenero(genero));
    resultados.push(this.validarHobbie(hobbie));
    resultados.push(this.validarHabilidad());

    return resultados;
}

}
