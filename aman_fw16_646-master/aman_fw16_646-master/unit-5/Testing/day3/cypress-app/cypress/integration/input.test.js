

describe("testing input tag",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
    })

    it("checking the inputbox",()=>{
        cy.get(".task-input").should("exist")
    })

    it("checking input focus",()=>{
        cy.focused().should('have.class',"task-input")
    })

   it("check input-value",()=>{
       let text= "BUY BREAD";
       cy.get(".task-input").type(text)
       .should("have.value",text)
   })

})