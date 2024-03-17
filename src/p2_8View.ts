import { MyArray } from "./p2_8Model";

const x = new MyArray([1, 4, 10, 20, -1]);
console.log("Lista Original", x.imprimir(x.lista))
console.log("Lista Reversa:", x.reversa(x.lista));
console.log("Chamada recursiva");
        