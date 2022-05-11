class datos {
    constructor(nombre, edad, sexo, fNacimiento, direccion, email, password) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.fNacimiento = fNacimiento;
        this.direccion = direccion;
        this.email = email;
        this.password = password;
    };
};

let reguistro = []
let preguntas = []
let usuario = []



function cargarUsuario() {

    let nombre1 = document.querySelector('#nombres').value;
    let edad1 = document.querySelector('#edad').value;
    let sexo1 = document.querySelector('#sexo').value;
    let direccion1 = document.querySelector('#direccion').value;
    let nacimiento1 = document.querySelector('#nacimiento').value;
    let email1 = document.querySelector('#email').value;
    let password1 = document.querySelector('#password').value;

    if (password1.length >= 8 && password1.toUpperCase(true)) {
        if (email1.length != 0) {
            if (nombre1.length !== 0) {
                if (sexo1.length !== 0) {
                    if (direccion1.length !== 0) {
                        if (nacimiento1.length !== 0) {
                            let nuevoUsuario = new datos(
                                nombre = nombre1,
                                edad = edad1,
                                sexo = sexo1,
                                fNacimiento = nacimiento1,
                                direccion = direccion1,
                                email = email1,
                                password = password1,
                            )
                            reguistro.push(nuevoUsuario)
                            $("#desaparecer").fadeOut(3000);
                            $("#displayNone").fadeIn(5000);

                        } else {
                            $("#alertNacimiento").fadeIn(2000);
                        }
                    } else {
                        $("#alertDireccion").fadeIn(2000);
                    }
                } else {
                    $("#alertSexo").fadeIn(2000);
                }

            } else {
                $("#alertNombre").fadeIn(2000);
            }

        } else {
            $("#alertEmail").fadeIn(2000);
        }
    } else {
        $("#alertPassword").fadeIn(2000);
    }
}
function archivarEncuesta() {
    let pregunta1 = document.querySelector('#pregunta1').value;
    let pregunta2 = document.querySelector('#pregunta2').value;
    let pregunta3 = document.querySelector('#pregunta3').value;
    let pregunta4 = document.querySelector('#pregunta4').value;
    preguntas.push(pregunta1, pregunta2, pregunta3, pregunta4)
    usuario.push(preguntas, reguistro)



}

let agregarusuario = document.getElementById('enviar');

agregarusuario.addEventListener("click", () => cargarUsuario());

console.log(reguistro)
console.log(usuario)

let encuesta = document.getElementById('archivar');

encuesta.addEventListener("click", (e) => {

    e.preventDefault()
    archivarEncuesta()
    $("#terminadoGracias").fadeIn(2000);

});
