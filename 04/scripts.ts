const imprimirEtiqueta = (
    pc: {
        produto: string,
        lote: number,
        ano: number,
        qtd: number
    }
): string[] => {
    let resultado: string[] = []
    for (let i = 1; i <= pc.qtd; i++) {
        resultado.push(`${pc.lote}-${pc.ano}-${i.toString().padStart(3, '0')}`)

    }
    return resultado
}

console.log(imprimirEtiqueta({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
})
)