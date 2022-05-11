let array=[
    {nombre:"Pedro", edad:20,ciudad:"Córdoba"},
    {nombre:"Patricia", edad:22,ciudad:"Córdoba"},
    {nombre:"José", edad:23,ciudad:"Mendoza"},
    {nombre:"María", edad:20,ciudad:"Córdoba"},
    {nombre:"Juan", edad:20,ciudad:"Córdoba"},
    {nombre:"Ana", edad:22,ciudad:"Córdoba"},
];

const funcionArray =(a)=>{
    let filtarCiudad= a.filter(personas => personas.ciudad === "Córdoba");
    let ordenarArrayEdad= filtarCiudad.sort(function (a, b) {
        if (a.edad > b.edad) {
          return 1;
        }else if (a.edad < b.edad) {
          return -1;
        }else {
            return 0;
        }
    });
    let ordenarArrayNombre=ordenarArrayEdad.sort(function (a, b) {
        if (a.edad ==b.edad){
            if (a.nombre > b.nombre) {
                return 1;
              }else if (a.nombre < b.nombre) {
                return -1;
              }else {
                  return 0;
              }
        }
    });
    let arraysdeNombres=ordenarArrayNombre.map(persona=>{ return persona.nombre})
    return arraysdeNombres
}

let mostrar=funcionArray(array)
console.log(mostrar)