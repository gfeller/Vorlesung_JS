function a() {
  console.log("Funktion A");
}

function b() {
  let x = 1;
  let x = 2; // ❌ SyntaxError (doppelte Deklaration)
}

a(); // ❓ Wird das ausgeführt?