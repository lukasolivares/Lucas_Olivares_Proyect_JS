let nombre = prompt("ingrese nombre")
alert("Bienvenido/a " + nombre)

let repetir = true

while (repetir) {
  let verdura = prompt("Ingrese la verdura que desea comprar.")

  switch (verdura) {
    case "cebolla":
      alert("el kilo de cebolla $400")
      break;
    case "papa":
      alert("el kilo de papa $40")
      break;

    default:
      alert("no tenemos la verdura ingresada")
      break;
  }

  let respuesta = prompt("Desea comprar otra verdura? escriba Si o No")

  if (respuesta === "no" || respuesta === "No") {
    repetir = false
  }
}

alert("Gracias por su compra " + nombre)

const verduras = [
  {
    nombre: "cebolla",
    precio: 400,
    oferta: false
  },
  {
    nombre: "papa",
    precio: 40,
    oferta: true
  },
  {
    nombre: "zanahoria",
    precio: 50,
    oferta: true
  },
]

for (let i = 0; i < verduras.length; i++) {
  let verdura = verduras[i]
  if (verdura.oferta) {
    alert("La verdura " + verdura.nombre + " tiene oferta")
  }
}