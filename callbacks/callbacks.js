const validateData = (callback) => {
  console.log("Validando información");

  setTimeout(() => {
    callback();
  }, 5000);
};

console.log("Iniciando programa");

validateData(() => {
  console.log("Terminando programa");
});

console.log("Procesando mas cosas...");

console.log("Procesando mas cosas...");

console.log("Procesando mas cosas...");

console.log("Procesando mas cosas...");
