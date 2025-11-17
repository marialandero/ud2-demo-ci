// Importamos solo lo que necesitamos testear
// ¡Actualizado para incluir 'restar'!
const { sumar, restar } = require('../src/calculadora');

// 'describe' agrupa tests relacionados. Es bueno para organizar.
describe('Pruebas para la Calculadora', () => {

  // 'it' (o 'test') define un caso de prueba individual.
  // La descripción debe ser clara: "debería..."
  it('debería sumar dos números correctamente', () => {
    
    // 'expect()' es la función de aserción de Jest.
    // .toBe() es un "comparador" (matcher) que usa === (igualdad estricta).
    expect(sumar(2, 2)).toBe(4);
    expect(sumar(10, -5)).toBe(5);
    expect(sumar(0, 0)).toBe(0);
  }),


    it('debería restar dos números correctamente', () => {
    
    // 'expect()' es la función de aserción de Jest.
    // .toBe() es un "comparador" (matcher) que usa === (igualdad estricta).
    expect(restar(4, 2)).toBe(2);
    expect(restar(10, 5)).toBe(5);
    expect(restar(0, 0)).toBe(0);
  });

});