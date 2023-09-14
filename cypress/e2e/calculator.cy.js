describe("Calculadora E2E", () => {
    it("Realiza operaciones de suma correctamente", () => {
      cy.visit("http://localhost:3000"); // Reemplaza la URL con la URL de tu aplicación
      cy.get('input[placeholder="0"]').type("5+3");
      cy.get("button:contains('=')").click();
      cy.get('[data-testid="result"]').should("have.text", "8");
    });
  
    it("Maneja divisiones por cero correctamente", () => {
      cy.visit("http://localhost:3000"); // Reemplaza la URL con la URL de tu aplicación
      cy.get('input[placeholder="0"]').type("5/0");
      cy.get("button:contains('=')").click();
      cy.get('[data-testid="result"]').should("have.text", "Error");
    });
  
    // Agrega más pruebas según sea necesario
  });