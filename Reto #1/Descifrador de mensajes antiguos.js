function decodeMessage(message) {
  message = message
    .replace(/0/g, "o")
    .replace(/1/g, "i")
    .replace(/3/g, "e")
    .replace(/4/g, "a")
    .replace(/5/g, "s")
    .replace(/7/g, "t");

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
