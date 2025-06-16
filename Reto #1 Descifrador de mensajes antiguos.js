// Message Decoder

/* Instrucciones
Crea una función que pueda descifrar mensajes encriptados siguiendo este patrón:

Si encuentras el símbolo >, intercambia la letra que está a su izquierda con la de la derecha.
Elimina los símbolos > y * después de haberlos evaluado.
Elimina cualquier símbolo que no sea letra, número, ¿?!¡, o espacio.
¡Las letras con acento hay que mantenerlas! */
function decodeMessage(message) {
  message = message.replace(/0/g, "o");
  message = message.replace(/1/g, "i");
  message = message.replace(/3/g, "e");
  message = message.replace(/4/g, "a");
  message = message.replace(/5/g, "s");
  message = message.replace(/7/g, "t");

  chars = message.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ">" && i > 0 && i < chars.length - 1) {
      let temp = chars[i - 1];
      chars[i - 1] = chars[i + 1];
      chars[i + 1] = temp;
    }
  }
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "*") {
      chars[i] = "";
      if (i + 1 < chars.length) {
        chars[i + 1] = "";
      }
    }
  }

  chars = chars.filter((c) => c !== ">" && c !== "*");
  message = chars.join("");
  message = message.replace(/[^a-zA-Z0-9¿?!¡áéíóúÁÉÍÓÚüÜñÑ ]/g, "");
  return message;
}

console.log(decodeMessage("a*bc>d"));
console.log(decodeMessage("†¡H$0*l4>l!║¤"));
