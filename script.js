//Ejercicio1
function ejercicio1() {
  let edad = prompt("Por favor, ingrese su edad:");

  if (!isNaN(edad)) {
    edad = parseInt(edad);
    if (edad >= 18) {
      console.log("Ya puede conducir.");
    } else {
      console.log("Aún no puede conducir.");
    }
  } else {
    console.log("La edad ingresada no es un número válido.");
  }
}

//ejercicio2
function ejercicio2() {
  let nota = prompt("Por favor, ingrese una nota del 0 al 10:");

  if (!isNaN(nota)) {
    nota = parseFloat(nota);
    if (nota >= 0 && nota <= 10) {
      if (nota >= 0 && nota <= 2) {
        alert("Muy deficiente");
      } else if (nota >= 3 && nota <= 4) {
        alert("Insuficiente");
      } else if (nota >= 5 && nota <= 6) {
        alert("Suficiente");
      } else if (nota === 7) {
        alert("Bien");
      } else if (nota >= 8 && nota <= 9) {
        alert("Notable");
      } else {
        alert("Sobresaliente");
      }
    } else {
      alert("Número erróneo");
    }
  } else {
    alert("Introduce un número válido");
  }
}

// ejercicio3
function ejercicio3() {
  let cadenas = [];
  let input = "";

  while (input !== null) {
    input = prompt(
      "Ingrese una cadena de texto (pulse 'cancelar' para finalizar):"
    );
    if (input !== null) {
      cadenas.push(input);
    }
  }

  if (cadenas.length > 0) {
    let resultado = cadenas.join("-");
    console.log(resultado);
  } else {
    console.log("No se ha ingresado ninguna cadena.");
  }
}

//ejercicio4
function ejercicio4() 
{
  let numeros = [];
  let input = "";

  while (input !== null) {
    input = prompt("Ingrese un número (pulse 'cancelar' para finalizar):");
    if (input !== null) {
      if (!isNaN(input)) {
        numeros.push(parseFloat(input));
      } else {
        alert("Por favor, ingrese un número válido.");
      }
    }
  }

  if (numeros.length > 0) {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
      sumaTotal += numeros[i];
    }
    alert("La suma total de los números introducidos es: " + sumaTotal);
  } else {
    alert("No se ha introducido ningún número.");
  }
}

//ejercicio5
function ejercicio5()
{
  let input = "";
  while (input !== null) {
    input = prompt("Ingrese el número de DNI (pulse 'cancelar' para finalizar):");
    if (input !== null) {
      if (!isNaN(input)) {
        const numeroDNI = parseInt(input, 10);
        if (numeroDNI >= 0 && numeroDNI <= 99999999) {
          const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
          const posicion = numeroDNI % 23;
          const letra = letrasDNI.charAt(posicion);
          alert("La letra correspondiente al número de DNI " + numeroDNI + " es: " + letra);
        } else {
          alert("El número de DNI debe estar entre 0 y 99999999.");
        }
      } else {
        alert("Por favor, ingrese un número válido.");
      }
    }
  }
}
//ejercicio6
function ejercicio6()
{
  for (let i = 1; i <= 30; i++) {
    let linea = "";
    for (let j = 0; j < i; j++) {
      linea += i;
    }
    console.log(linea);
  }
  
}
//ejercicio7
function ejercicio7()
{
  let numeroLimite = prompt("Por favor, ingrese un número no mayor de 50:");

  if (!isNaN(numeroLimite) && numeroLimite <= 50) {
    for (let i = numeroLimite; i >= 1; i--) {
      let linea = "";
      for (let j = 0; j < numeroLimite - i + 1; j++) {
        linea += i;
      }
      console.log(linea);
    }
  } else {
    console.log("Por favor, ingrese un número válido que no sea mayor de 50.");
  }
}
//ejercicio8
function ejercicio8()
{
  let numeroLimite = prompt("Por favor, ingrese un número no mayor de 50:");

  if (!isNaN(numeroLimite) && numeroLimite <= 50) {
    let linea = "";
    for (let i = 1; i <= numeroLimite; i++) {
      linea += i;
      console.log(linea);
    }
  } else {
    console.log("Por favor, ingrese un número válido que no sea mayor de 50.");
  }
  
}
//ejercicio9
function ejercicio9()
{
  for (let i = 1; i <= 500; i++) {
    if (i % 4 === 0 && i % 9 === 0) {
      console.log(i + " (Múltiplo de 4 y 9)");
    } else if (i % 4 === 0) {
      console.log(i + " (Múltiplo de 4)");
    } else if (i % 9 === 0) {
      console.log(i + " (Múltiplo de 9)");
    } else {
      console.log(i);
    }
  
    if (i % 5 === 0) {
      console.log("-----");
    }
  }
  
}
//ejercicio10
function ejercicio10()
{
  let numFilas = prompt("Por favor, ingrese el número de filas:");
  let numColumnas = prompt("Por favor, ingrese el número de columnas:");
  
  if (!isNaN(numFilas) && !isNaN(numColumnas)) {
    numFilas = parseInt(numFilas);
    numColumnas = parseInt(numColumnas);
  
    let numero = numFilas * numColumnas;
  
    let tabla = "<table border='1'>";
    for (let i = 0; i < numFilas; i++) {
      tabla += "<tr>";
      for (let j = 0; j < numColumnas; j++) {
        tabla += "<td>" + numero + "</td>";
        numero--;
      }
      tabla += "</tr>";
    }
    tabla += "</table>";
  
    document.write(tabla);
  } else {
    console.log("Por favor, ingrese números válidos para filas y columnas.");
  }
  
}
//ejercicio11
function ejercicio11()
{
  let edades = [];
  let nombres = [];
  
  for (let i = 0; i < 3; i++) {
    let nombre = prompt("Por favor, ingrese un nombre:");
    let edad = prompt("Por favor, ingrese una edad:");
  
    nombres.push(nombre);
    edades.push(parseInt(edad));
  }
  
  let indiceMayor = edades.indexOf(Math.max(...edades));
  let nombreMayor = nombres[indiceMayor];
  
  console.log("La persona de mayor edad es: " + nombreMayor);
  
}
//ejercicio12
function ejercicio12()
{
  let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
  console.log("El número aleatorio generado es: " + numeroAleatorio);
  
}
//ejercicio13
function ejercicio13()
{
  let texto = prompt("Por favor, ingrese un texto:");
  let textoEnMayusculas = texto.toUpperCase();
  console.log("El texto en mayúsculas es: " + textoEnMayusculas);
  
}
//ejercicio14
function ejercicio14()
{
  let texto = prompt("Por favor, ingrese una cadena de texto:");
  let textoModificado = "";
  
  for (let i = 0; i < texto.length; i++) {
    if (i === texto.length - 1) {
      textoModificado += texto[i];
    } else {
      textoModificado += texto[i] + "-";
    }
  }
  
  console.log("El texto modificado es: " + textoModificado);
  
}
//ejercicio15
function ejercicio15()
{
  let texto = prompt("Por favor, ingrese un texto:");
  let conteoVocales = 0;
  
  const vocales = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i].toLowerCase())) {
      conteoVocales++;
    }
  }
  
  console.log("El número de vocales en el texto es: " + conteoVocales);
  
}
//ejercicio16
function ejercicio16()
{
  let texto = prompt("Por favor, ingrese una cadena de texto:");
  let textoInvertido = "";
  
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  
  console.log("El texto invertido es: " + textoInvertido);
  
}
//ejercicio17
function ejercicio17()
{
  let texto = prompt("Por favor, ingrese una cadena de texto:");
  let posicion = -1;
  
  const vocales = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i].toLowerCase())) {
      posicion = i + 1;
      break;
    }
  }
  
  if (posicion !== -1) {
    console.log(`La vocal '${texto[posicion - 1]}' está en la posición ${posicion}`);
  } else {
    console.log("No se encontraron vocales en el texto.");
  }
  
}