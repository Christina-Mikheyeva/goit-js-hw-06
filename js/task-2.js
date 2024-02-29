const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
   return this.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this;

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order("Big Mike"));
console.log(pizzaPalace.order("Four meats"));
console.log(checkPizza(pizzaName));