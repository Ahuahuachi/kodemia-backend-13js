// Preparar un frappe
// 1. Colocar orden (2 seg)
// 2. Cortar fruta (2 seg)
// 3. Añadir agua y hielo (1 seg)
// 4. Iniciar la máquina (1 seg)
// 5. Seleccionar contenedor (1 seg)
// 6. Seleccionar toppings (3 seg)
// 7. Servir helado (2 seg)

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

/**  frappeOrder = {
 *        fruits: "strawberry"
 *        liquid: "ice"
 *        holder: "cone"
*         toppings: "chocolate"
          }
*/

// preparación del frappe
const order = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    if (typeof frappeOrder != "object") {
      reject("Order is not an Object");
    } else {
      setTimeout(() => {
        console.log("Order placed");
        resolve(frappeOrder);
      }, 2000);
    }
  });
};

const chopFruit = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (frappeOrder.fruit) {
        console.log(`${frappeOrder.fruit} chopped`);
        resolve(frappeOrder);
      } else {
        reject("Fruit not selected");
      }
    }, 2000);
  });
};

const addLiquid = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${frappeOrder.liquid} added`);
      resolve(frappeOrder);
    }, 1000);
  });
};

const startMachine = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Machine started");
      resolve(frappeOrder);
    }, 1000);
  });
};

const placeOnHolder = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${frappeOrder.holder} selected`);
      resolve(frappeOrder);
    }, 1000);
  });
};

const addToppings = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${frappeOrder.toppings} added`);
      resolve(frappeOrder);
    }, 3000);
  });
};

const serve = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Frappe served");
      resolve(frappeOrder);
    }, 2000);
  });
};

const printError = (reason) => {
  console.error("Error: ", reason);
};

const printFinal = () => {
  console.log("Process terminated");
};

order({
  fruit: stocks.fruits[1],
  liquid: stocks.liquid[1],
  holder: stocks.holder[2],
  toppings: stocks.toppings[1],
})
  .then(chopFruit)
  .then(addLiquid)
  .then(startMachine)
  .then(placeOnHolder)
  .then(addToppings)
  .then(serve)
  .catch(printError)
  .finally(printFinal);

order({
  liquid: stocks.liquid[1],
  holder: stocks.holder[1],
  toppings: stocks.toppings[0],
})
  .then(chopFruit)
  .then(addLiquid)
  .then(startMachine)
  .then(placeOnHolder)
  .then(addToppings)
  .then(serve)
  .catch(printError)
  .finally(printFinal);

order(1)
  .then(chopFruit)
  .then(addLiquid)
  .then(startMachine)
  .then(placeOnHolder)
  .then(addToppings)
  .then(serve)
  .catch(printError)
  .finally(printFinal);
