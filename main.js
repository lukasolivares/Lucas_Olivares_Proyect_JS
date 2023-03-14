//var = Variable
//let =variable para un archivo
//cons = constante (no varia)
//prompt (entrada)
//alert (salida)

let nombre = prompt ("ingrese nombre")
alert("Bienvenido/a " + nombre)

//prompt guarda el continido como caracter

//console.log
//console no se puede mostrar informacion sensible ya que todos pueden verlo.

//debug con breakpoint


//Condicionales en java escript ----> "estructura IF" --> if... else, | if... else if

//Variables boolean ---> Valores verdadero (true) Volres falsos (false)

//Operadores logicos de comparacion --> AND - NOT - OR ----> Combinaciones

//para asignar se utiliza 1 "=" (igual)
//para comparar se utiliza 2 "==" (igual) <-- NO TIENE EN CUENTA EL TIPO DE DATO (DA TRUE)
//para comparar se utiliza 3 "===" (igual) <-- SI TIENE EN CUENTA EL TIPO DE DATO (DA FALSE)

//CONTRASEÑAS SE UTILIZA 3 === 


let verdura = prompt ("Ingrese la verdura que desea comprar")
switch (verdura) {
    case "cebolla":
        alert ("el kilo de cebolla $400")
        break;
    case "papa":
        alert ("el kilo de cebolla $400")
        break;

    default:
        alert ("no tenemos la verdura ingresada")
        break;
}