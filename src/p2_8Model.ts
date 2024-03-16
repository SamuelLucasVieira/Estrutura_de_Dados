class MyArray {
    lista: number[];

    constructor(lista: number[]) {
        this.lista = lista;
    }

    imprimir(lista: number[]): number[] {
        if (lista.length <= 1) {
            console.log("Caso Base Atingido");
            return lista;
        } else {
            console.log("Chamada recursiva");
            console.log("Invocando a Lista");
            console.log("Invocando Lista(", lista.slice(1, lista.length), ");");
            let imprimir_lista: number[] = this.imprimir(lista.slice(1, lista.length));
            let v: number[] = [];
            if (imprimir_lista.length < lista.length) {
                v.push(lista[0]);
                return v.concat(imprimir_lista);
            } else {
                return v;
            }
        }
    }

    reversa(lista: number[]): number[] {
        if (lista.length <= 1) {
            console.log("Caso Base Atingido");
            return lista;
        } else {
            console.log("Chamada recursiva");
            console.log("Invocando a reversa");
            console.log("Invocando Lista( ", lista.slice(1, lista.length), ");");
            // Definição da função reversa_restante incrementa valor inicial conforme o caso base;
            let reversa_restante = this.reversa(lista.slice(1, lista.length));
            if(reversa_restante.length >= 1){
                return reversa_restante.concat(lista[0])
            } else {
                return reversa_restante;
            } 
        }
    }
}

export { MyArray };
