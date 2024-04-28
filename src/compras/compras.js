    const calcularTotal = (ferramentas, comprar) => {
        const quantidadeDeFerramentas= ferramentas.length;
        const quantidadeComprar= comprar.length;
        let resultado=0;
        let itemComprado=0;
        if (ferramentas.length === 0 && comprar.length === 0) {
            throw new Error("Ambas as listas precisam ter ao menos um item.");
        }else if (ferramentas.length === 0 || comprar.length === 0) {
            throw new Error("Ambas as listas precisam ter ao menos um item.");
        }
        for (let indice = 0; indice < quantidadeDeFerramentas; indice++) {
            for (let indiceComprar = 0; indiceComprar < quantidadeComprar; indiceComprar++) {
                if(comprar[indiceComprar] == ferramentas[indice].nome){
                    resultado = ferramentas[indice].preco + resultado;
                    itemComprado = comprar[indiceComprar];
                }
            }
        }
        if(itemComprado == 0){
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        }
        return `O valor a pagar pelas ferramentas (${comprar.join(", ")}) é R$ ${resultado.toFixed(2)}`;

    }

module.exports = {
    calcularTotal
}