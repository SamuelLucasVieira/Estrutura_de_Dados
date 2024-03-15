class MyArray {
    lista: number[];
// Lista é o elemento que será usado como base para a recursividade.
    constructor(lista: number[]) {
        this.lista = lista;
    }
    //Reversa refere-se a receber conteúdo de lista, que aplicado ao caso base concatena os valor lista posição inicial e incrementa na váriavel 
    reversa(lista: number[]): number[] {
        if (lista.length <= 1) {
            console.log("Caso Base Atingido");
            return lista;
        } else {
            console.log("Chamada recursiva");
            console.log("Invocando a reversa");
            console.log("Invocando Lista( ", lista.slice(1, lista.length), ");");
            let reversa_restante = this.reversa(lista.slice(1, lista.length));
            if(reversa_restante.length >= 1){
                return reversa_restante.concat(lista[0]);
            }else{
                return reversa_restante
            } 
        }
    }
}
export{
    MyArray
}
