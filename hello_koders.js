let koderName = process.env.KODERNAME;

console.log("Iniciando ejecución");

if (koderName) {
  console.log(`Hola ${koderName}`);
} else {
  console.log(`Hola Koder`);
}

console.log("Terminando ejecución...");
