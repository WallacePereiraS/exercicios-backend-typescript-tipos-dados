const separador = (palavra: string): string => {
    return palavra.split('').join('-')
}

console.log(separador('Botafoguei'))