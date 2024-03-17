class MyArray {
    lista: number[];

    constructor(lista: number[]) {
        this.lista = lista;
    }

    imprimir(lista: number[]): number[] {
        if (lista.length <= 0) {
            console.log("Caso Base Atingido");
            return [];
        } else {
            console.log("Chamada recursiva");
            console.log("Invocando a Lista");
            console.log("Invocando Lista(", lista.slice(0, lista.length), ");");
             // Definição da função imprimir_restante incrementa valor inicial conforme o caso base;
            let imprimir_restante: number[] = this.imprimir(lista.slice(1, lista.length));
            return [lista[0], ...imprimir_restante];
        }
    }

    reversa(lista: number[]): number[] {
        if (lista.length <= 0) {
            console.log("Caso Base Atingido");
            return [];
        } else {
            console.log("Chamada recursiva");
            console.log("Invocando a reversa");
            console.log("Invocando Lista( ", lista.slice(0, lista.length), ");");
            // Definição da função reversa_restante incrementa valor inicial conforme o caso base;
            let reversa_restante:number[] = this.reversa(lista.slice(1, lista.length));
            return[...reversa_restante, lista[0]]
    }
}
}
export { MyArray };
