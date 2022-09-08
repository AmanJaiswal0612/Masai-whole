

describe("testing todo",()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/todo")
    })

    it("check the things",()=>{
        cy.get(".new-todo").should("exist")
        cy.get(".todo-count").should("exist")
        cy.get(".filters").should("exist")
    })
    
    it("check nofChild",()=>{
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("Buy Sofa{enter}");
        cy.get(".todo-list").children().should("have.length",3)
    })

    it("check completed count",()=>{
      cy.get(".todo-count strong").should("have.text",2)
    })
   

})