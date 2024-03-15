class MyArray {
    lista: number[];

    constructor(lista: number[]) {
        this.lista = lista;
    }

    reversa(a: number[]): number[] {
        if (a.length <= 1) {
            console.log("Caso Base Atingido");
            return a;
        } else {
            console.log("Chamada recursiva");
            console.log("Invocando a reversa");
            console.log("Invocando Lista( ", a.slice(1, a.length), ");");
            let reversa_restante = this.reversa(a.slice(1, a.length));
            if(reversa_restante.length >= 1){
                return reversa_restante.concat(a[0]);
            }else{
                return reversa_restante
            } 
        }
    }
}
export{
    MyArray
}
