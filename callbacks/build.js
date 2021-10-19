// 1. medir espacio (1 seg)
// 2. comprar materiales (2 seg)
// 3. hacer esqueleto (2 seg)
// 4. hacer mezcla (3 seg)
// 5. poner ladrillos (3 seg)
// 6. aplanado (4 seg)
// 7. pintar (2 seg)

const medirEspacio = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wallNumber == 1) {
        console.log(`Se midió el espacio para el muro ${wallNumber}`);
        let response = [wallNumber, "Alfredo"];
        resolve(response);
      } else {
        reject(`No se pudo medir el espacio para el muro ${wallNumber}`);
      }
    }, 1000);
  });
};

const comprarMaterial = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `${response[1]} compró el material para el muro ${response[0]}`
      );
      resolve(response[0]);
    }, 2000);
  });
};

const construirEsqueleto = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se construyó el esqueleto del muro ${wallNumber}`);
      resolve(wallNumber);
    }, 2000);
  });
};

const hacerMezcla = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wallNumber == 1) {
        console.log(`Se hizo la mezcla del muro ${wallNumber}`);
        resolve(wallNumber);
      } else {
        reject(`Hubo un error en la mezcla del muro ${wallNumber}`);
      }
    }, 3000);
  });
};

const ponerLadrillos = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se colocaron los ladrillos del muro ${wallNumber}`);
      resolve(wallNumber);
    }, 3000);
  });
};

const aplanado = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se aplanó de muro ${wallNumber}`);
      resolve(wallNumber);
    }, 4000);
  });
};

const pintar = (wallNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se pintó el muro ${wallNumber}`);
      resolve(wallNumber);
    }, 2000);
  });
};

const imprimirError = (mensaje) => {
  console.error("Error:", mensaje);
};

const imprimirFinal = () => {
  console.log(`Muro terminado`);
};

medirEspacio(1)
  .then(comprarMaterial)
  .then(construirEsqueleto)
  .then(hacerMezcla)
  .then(ponerLadrillos)
  .catch(imprimirError)
  .finally(imprimirFinal);
