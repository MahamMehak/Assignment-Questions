"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    const car = {
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
