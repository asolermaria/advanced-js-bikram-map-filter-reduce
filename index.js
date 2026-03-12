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
