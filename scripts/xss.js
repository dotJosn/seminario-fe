document.getElementById("submitBtn").addEventListener("click", function() {

  const userInput = document.getElementById("userInput").value;

  // Validar entrada (permitir apenas letras e números)
  if (!/^[a-zA-Z0-9 ]+$/.test(userInput)) {
      alert("Entrada inválida! Apenas letras e números são permitidos.");
      return;
  }

  // Sanitizar entrada
  const sanitizedInput = DOMPurify.sanitize(userInput);

  // Escapar saída
  document.getElementById("output").innerText = sanitizedInput;
});

document.getElementById("submitBtn2").addEventListener("click", function() {

  const userInput2 = document.getElementById("userInput2").value;

  // Validar entrada (permitir apenas letras e números)

  // if (!/^[a-zA-Z0-9 ]+$/.test(userInput2)) {
  //     alert("Hackeado!");
  //     return;
  // }

  // // Sanitizar entrada
  // const sanitizedInput = DOMPurify.sanitize(userInput);

  // Escapar saída
  document.getElementById("output2").innerHTML = userInput2;
});