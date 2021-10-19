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

// preparación del frappe
//

const preparar = (fruit, liquid, holder, toppings) => {
  // 1. Colocar orden (2 seg)
  setTimeout(() => {
    console.log("Order placed");
    // 2. Cortar fruta (2 seg)
    setTimeout(() => {
      console.log(`${fruit} choped`);
      // 3. Añadir agua y hielo (1 seg)
      setTimeout(() => {
        console.log(`${liquid} added`);
        // 4. Iniciar la máquina (1 seg)
        setTimeout(() => {
          console.log("Machine started");
          // 5. Seleccionar contenedor (1 seg)
          setTimeout(() => {
            console.log(`${holder} selected`);
            // 6. Seleccionar toppings (3 seg)
            setTimeout(() => {
              console.log(`${toppings} selected`);
              // 7. Servir helado (2 seg)
              setTimeout(() => {
                console.log("Frappe served");
              }, 2000);
            }, 3000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 2000);
};

preparar(
  stocks.fruits[0],
  stocks.liquid[0],
  stocks.holder[0],
  stocks.toppings[0]
);
preparar(
  stocks.fruits[1],
  stocks.liquid[1],
  stocks.holder[2],
  stocks.toppings[1]
);

preparar(
  stocks.fruits[0],
  stocks.liquid[0],
  stocks.holder[1],
  stocks.toppings[1]
);
preparar(
  stocks.fruits[3],
  stocks.liquid[1],
  stocks.holder[1],
  stocks.toppings[0]
);
