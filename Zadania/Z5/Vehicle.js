"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = __importDefault(require("./Unit"));
class Vehicle extends Unit_1.default {
    constructor(name, hitPoints, moveDistance, weapons, fuelLeft, //przykład skróconego konstruktora
    maxFuel, fuelConsumptionPerMove) {
        super(name, hitPoints, moveDistance, weapons);
        this.fuelLeft = fuelLeft;
        this.maxFuel = maxFuel;
        this.fuelConsumptionPerMove = fuelConsumptionPerMove;
    }
}
