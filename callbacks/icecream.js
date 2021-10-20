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
*         toppings: "chocolate",
          complete: false,
          fruit_added: false,
          liquid_added: false
          }
*/

// preparación del frappe
const order = async (frappeOrder) => {
  return new Promise((resolve, reject) => {
    if (typeof frappeOrder != "object") {
      reject("Order is not an Object");
    } else {
      setTimeout(() => {
        // Cambia el estado de la orden
        frappeOrder.status = "Order placed";

        // Imprime el estado actual
        console.log("Order placed:", frappeOrder);

        // Cumple la promesa
        resolve(frappeOrder);
      }, 2000);
    }
  });
};

const chopFruit = (frappeOrder) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (frappeOrder.fruits) {
        // Cambia el estado de la orden (fruit_chopped)
        frappeOrder.status = "Fruit added";

        // Imprime el estado actual de la orden
        console.log("Order status:", frappeOrder);

        // Cumple la promesa
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
      // Cambia el estado de la orden
      frappeOrder.status = "Liquid added";

      // Imprime el estado actual
      console.log("Order status:", frappeOrder);

      // Cumple la promesa
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
      frappeOrder.complete = true;
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

let frappeOrder1 = {
  fruits: stocks.fruits[0],
  liquid: stocks.liquid[0],
  holder: stocks.holder[0],
  toppings: stocks.toppings[0],
  status: "",
  completed: false,
};

const main = async () => {
  await order(frappeOrder1);
  await chopFruit(frappeOrder1);
  await addLiquid(frappeOrder1);
};

main();
console.log("Esto se ejecuta asincronamente");
