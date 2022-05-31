/// <reference types="cypress" />

describe("Tasks", () => {
  beforeEach(() => {
    cy.task("db:seed");
    cy.visit("/");
  });

  const task = "[data-testid=task-item]";
  const checkbox = "[data-testid=task-checkbox]";

  it("displays existing tasks", () => {
    cy.get(task).should("have.length", 2);
    cy.get(task).first().should("have.text", "Water plants");
    cy.get(task).last().should("have.text", "Drink water");
  });

  it("can add a new task", () => {
    cy.get("[data-testid=task-input]").type(`${"Cats"}{enter}`);
    cy.get(task).should("have.length", 3).last().should("have.text", "Cats");
  });

  it("can check off a task as completed", () => {
    cy.get(task).first().find(checkbox).check();
    cy.get(task).first().find(checkbox).should("have.checked", "true");
  });

  it("can uncheck the completed task", () => {
    cy.get(task).first().find(checkbox).check();
    cy.get(task).first().find(checkbox).should("have.checked", "false");
  });

  it("can edit the task on click", () => {
    cy.contains("Water plants").click().clear().type("Kill plants").blur();
    cy.get(task).first().should("have.text", "Kill plants");
    cy.contains("Water plants").should("not.exist");
  });

  it("can delete the task", () => {
    cy.get(task).first().find("[data-testid=task-dropdown]").first().click();

    cy.get("[data-testid=task-delete]").first().click();

    cy.get(task)
      .should("have.length", 1)
      .should("not.have.text", "Water plants");
  });
});

export {};
