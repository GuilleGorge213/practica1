function hanoi(numeroDeDiscos: number, torreInicial: string, torreFinal: string, torreAuxiliar: string): void {
  if (numeroDeDiscos == 1) {
    console.log(`Mover de  ${torreInicial} a ${torreFinal}`);
    return;
  }
  hanoi(numeroDeDiscos - 1, torreInicial, torreAuxiliar, torreFinal);
  hanoi(numeroDeDiscos - 1, torreAuxiliar, torreFinal, torreInicial);
}
hanoi(5, 'torreInicial', 'torreFinal', 'torreAuxiliar');
