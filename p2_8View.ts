import { MyArray } from "./p2_8Model";

const x = new MyArray([1, 4, 10, 20, -1]);
console.log("Array original:");
console.log(x.lista);
console.log("Lista Reversa:", x.reversa(x.lista));