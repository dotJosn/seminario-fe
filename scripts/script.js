document.getElementById("submitBtn").addEventListener("click", function() {
  const userInput = document.getElementById("userInput").value;

  if (!/^[a-zA-Z0-9 ]+$/.test(userInput)) {
      alert("Entrada inválida! Apenas letras e números são permitidos.");
      return;
  }

  const sanitizedInput = DOMPurify.sanitize(userInput);

  document.getElementById("output").innerText = sanitizedInput;
});