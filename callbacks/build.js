// 1. medir espacio (1 seg)
// 2. comprar materiales (2 seg)
// 3. hacer esqueleto (2 seg)
// 4. hacer mezcla (3 seg)
// 5. poner ladrillos (3 seg)
// 6. aplanado (4 seg)
// 7. pintar (2 seg)

const medirEspacio = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};
const comprarMaterial = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};
const construirEsqueleto = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};
const hacerMezcla = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};
const ponerLadrillos = (callback) => {
  setTimeout(() => {
    callback();
  }, 3000);
};
const aplanado = (callback) => {
  setTimeout(() => {
    callback();
  }, 4000);
};
const pintar = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};
const construirMuro = () => {
  medirEspacio(() => {
    console.log("El espacio fue medido");
    comprarMaterial(() => {
      console.log("Ya compre material");
      construirEsqueleto(() => {
        console.log("Equeleto terminado");
        hacerMezcla(() => {
          console.log("La mezcla esta lista");
          ponerLadrillos(() => {
            console.log("Ladrillos listos");
            aplanado(() => {
              console.log("Muro aplanado");
              pintar(() => {
                console.log("Muro terminado");
              });
            });
          });
        });
      });
    });
  });
};

console.log("Iniciando obra");

// for (let index = 0; index <= 4; index++) {
construirMuro();
construirMuro();
construirMuro();
construirMuro();

// }
