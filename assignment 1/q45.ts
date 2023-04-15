interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  const car: Car = {
    manufacturer,
    model,
  };

  for (const [key, value] of options) {
    car[key] = value;
  }

  return car;
}

// Example usage
const car = createCar("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
console.log(car);