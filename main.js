

let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido/a " + nombre)


// Peso ideal según la altura para hombres
const hombre = {
    nombre: "Hombre",
    alturaMinima: 1.60,
    alturaMaxima: 1.95,
    pesoMinimo: function(altura) {
      return Math.round((this.alturaMinima ** 2) * 20)
    },
    pesoMaximo: function(altura) {
      return Math.round((this.alturaMaxima ** 2) * 25)
    }
}

// Peso ideal según la altura para mujeres
const mujer = {
    nombre: "Mujer",
    alturaMinima: 1.50,
    alturaMaxima: 1.80,
    pesoMinimo: function(altura) {
      return Math.round((this.alturaMinima ** 2) * 19)
    },
    pesoMaximo: function(altura) {
      return Math.round((this.alturaMaxima ** 2) * 24)
    }
}

// Objeto 3: Peso ideal según la altura para niños
const niño = {
    nombre: "Niño",
    alturaMinima: 1.00,
    alturaMaxima: 1.50,
    pesoMinimo: function(altura) {
      return Math.round((this.alturaMinima ** 2) * 14)
    },
    pesoMaximo: function(altura) {
      return Math.round((this.alturaMaxima ** 2) * 18)
    }
}

  // Función que valida que la medida ingresada sea un número
function validarMedida(medida) {
    if (isNaN(medida) || medida <= 0) {
    alert("La medida ingresada no es válida. Intente de nuevo.")
    return false;
    }
    return true;
}


function mostrarPesoIdeal(objeto) {
    let medida = prompt("Ingrese la altura en metros:")
    if (validarMedida(medida)) {
    medida = parseFloat(medida)
    let pesoMinimo = objeto.pesoMinimo(medida)
    let pesoMaximo = objeto.pesoMaximo(medida)
    alert(`El peso ideal para una ${objeto.nombre} con altura ${medida} m es entre ${pesoMinimo} y ${pesoMaximo} kg.`)
    let continuar = confirm("¿Desea ingresar otra medida?")
    if (continuar) {
        mostrarPesoIdeal(objeto)
    }
    } else {
    mostrarPesoIdeal(objeto)
    }
}


    function mostrarMenu() {
    let opcion = prompt(`Ingrese el número correspondiente al objeto deseado:
    1. ${hombre.nombre}
    2. ${mujer.nombre}
    3. ${niño.nombre}`)
    switch(opcion) {
    case "1":
        mostrarPesoIdeal(hombre)
        break
    case "2":
        mostrarPesoIdeal(mujer)
        break
    case "3":
        mostrarPesoIdeal(niño)
        break
    default:
        alert("Opción no válida. Intente de nuevo.")
        mostrarMenu()
    }
}

mostrarMenu();