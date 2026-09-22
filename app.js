const supabaseUrl = 'https://issgjubagtekjzpedwua.supabase.co';
const supabaseKey = 'sb_publishable_Sy-5fwqD4q6d4WWE2mpfjA_xQESUwvO';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const botonLogin = document.getElementById('botonLogin');
const botonRegistro = document.getElementById('botonRegistro');
const botonConfirmar = document.getElementById('botonConfirmar');


if (botonLogin) {
    botonLogin.addEventListener('click', async function(e) {
        e.preventDefault(); 
        
        const correo = document.getElementById('inputUsuario').value;
        const contrasena = document.getElementById('inputContrasena').value;

        if (correo === "" || contrasena === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email: correo,
            password: contrasena
        });

        if (error) {
            alert("Error al iniciar sesión: " + error.message);
        } else {
            window.location.href = "dashboard.html";
        }
    });
}

if (botonRegistro) {
    botonRegistro.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.location.href = "registro.html";
    });
}

if (botonConfirmar) {
    botonConfirmar.addEventListener('click', async function(e) {
        e.preventDefault(); 

        const nombre = document.getElementById('inputNombre').value;
        const apellido = document.getElementById('inputApellido').value;
        const tipoDoc = document.getElementById('inputTipoDocumento').value;
        const numDoc = document.getElementById('inputNumero').value;
        const direccion = document.getElementById('inputDireccion').value;
        const telefono = document.getElementById('inputTelefono').value;
        const correo = document.getElementById('inputCorreo').value;
        const contrasena = document.getElementById('inputContrasenaRegistro').value; 

        if (nombre === "" || apellido === "" || correo === "" || contrasena === "" || numDoc === "") {
            alert("Por favor, completa los campos obligatorios.");
            return;
        }
		
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email: correo,
            password: contrasena
        });

        if (authError) {
            alert("Error en el registro: " + authError.message);
            return;
        }
		
        const userId = authData.user.id; // El ID único generado por Supabase
        const { error: errorPerfil } = await supabase.from('perfiles').insert([
            { id: userId, email: correo, rol: 'cliente' }
        ]);

        if (errorPerfil) {
            alert("Error al crear el perfil: " + errorPerfil.message);
            return;
        }
		
        const { error: errorPropietario } = await supabase.from('propietario').insert([
            {
                id_perfil: userId,
                nombrepropietario: nombre,
                apellidospropietario: apellido,
                tipodocumento: tipoDoc,
                numerodocumento: numDoc,
                telefono: telefono,
                direccion: direccion,
                email: correo
            }
        ]);

        if (errorPropietario) {
            alert("Error al guardar datos del propietario: " + errorPropietario.message);
            return;
        }

        alert("¡Registro exitoso! Ya puedes iniciar sesión.");
        window.location.href = "index.html"; 
    });
}
