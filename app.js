
const botonLogin = document.getElementById('botonLogin');
const botonRegistro = document.getElementById('botonRegistro');
const inputUsuario = document.getElementById('inputUsuario');
const inputContrasena = document.getElementById('inputContrasena');


const botonConfirmar = document.getElementById('botonConfirmar');
const inputNombre = document.getElementById('inputNombre');
const inputApellido = document.getElementById('inputApellido');
const inputCorreo = document.getElementById('inputCorreo');


// 3. Evento para el botón de INICIAR SESIÓN (Solo se ejecuta si existe en la página actual)
if (botonLogin) {
    botonLogin.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que la página se recargue sola
        
        const valorUsuario = inputUsuario.value;
        const valorContrasena = inputContrasena.value;

        // Validación de campos vacíos para el login
        if (valorUsuario === "" || valorContrasena === "") {
            alert("Por favor, completa ambos campos.");
        } else {
            // Si todo está bien, redirige a la página de sesión
            window.location.href = "dashboard.html";
        }
    });
}


// 4. Evento para el botón de REGISTRO (El botón que está en el login para ir al formulario)
if (botonRegistro) {
    botonRegistro.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que la página se recargue sola
        
        // Redirige directamente a la página de registro
        window.location.href = "registro.html";
    });
}


// 5. Evento para el botón CONFIRMAR (El botón que está dentro de tu formulario de registro)
if (botonConfirmar) {
    botonConfirmar.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que la página se recargue sola

        // Validación de campos obligatorios vacíos
        if (inputNombre.value === "" || inputApellido.value === "" || inputCorreo.value === "") {
            alert("Por favor, completa los campos obligatorios.");
        } else {
            alert("¡Registro exitoso!");
            // Redirige de regreso al login o al dashboard cuando termine
            window.location.href = "index.html"; 
        }
    });
}