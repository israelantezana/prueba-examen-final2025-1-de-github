import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia retornar 0 para cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });

  it("deberia retornar el numero para cadena de un solo numero", () => {
    expect(sumar("2")).toEqual(2);
  });
});
