const users = [
  {
    name: "John",
    age: 30,
    hobby: "reading",
  },
  {
    name: "ann",
    age: 25,
    hobby: "walking",
  },
  {
    name: "max",
    age: 15,
    hobby: "runing",
  },
];
const getAllPropValues = (arr, prop) => {
  const properties = [];

  for (const product of arr) {
    if (prop in product) {
      properties.push(product[prop]);
    }
  }

  return properties;
};
console.log(getAllPropValues(users, "name"));
console.log(getAllPropValues(users, "age"));
console.log(getAllPropValues(users, "hobby"));
