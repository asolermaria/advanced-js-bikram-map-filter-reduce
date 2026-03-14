//RESUELVE LOS EJERCICIOS AQUI

// Ejercicio 1
const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
  return numbers.map((n) => n ** n);
}

const resultado1 = elevados();

// Ejercicio 2

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
const paises = {
  Pizza: "Italia",
  Ramen: "Japón",
  Paella: "Valencia",
};

const result2 = foodList.map((comida) => {
  if (comida === "Entrecot") {
    return `Aunque no como carne, el ${comida} es sabroso`;
  } else {
    let pais = paises[comida];
    return `Como soy de ${pais}, amo comer ${comida}`;
  }
});

// Ejercicio 3

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const result3 = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(" y ")}`;
});

//Ejercicio 4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((number) => {
  let compruebaImpar = number % 2;
  if (compruebaImpar != 0) return number;
});

//Ejercicio 5

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

const veganos = foodList2.filter((plato) => {
  return plato.isVeggie == true;
});

const result5 = veganos.map((platoVegano) => {
  if (platoVegano.name == "Tempeh")
    return `Que rico ${platoVegano.name} me voy a comer!`;
  if (platoVegano.name == "Tofu burguer")
    return `Que rica ${platoVegano.name} me voy a comer!`;
});

//Ejercicio 6

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const elementosFiltrados = inventory.filter((elemento) => {
  return elemento.price > 300;
});

const result6 = elementosFiltrados.map((elemento) => {
  return elemento.name;
});

//Ejercicio 7
const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acumulador, elementoActual) => {
  return (acumulador *= elementoActual);
}, 1);

//Ejercicio 8
const sentenceElements = [
  "Me",
  "llamo",
  "Antonio",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

const result8 = sentenceElements.reduce((acumulador, elementoActual) => {
  if (elementoActual === "javascript") return (acumulador += elementoActual);
  else return (acumulador += elementoActual + " ");
}, "");

//Ejercicio 9
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const categoryCode = books.filter((libro) =>{
  return libro.category == "code"
})

const preciosCategoryCode = categoryCode.map((libro) => {
  return libro.price
})

const result9 = preciosCategoryCode.reduce ((acumulador, elementoActual) => {
  return acumulador += elementoActual
}, 0)