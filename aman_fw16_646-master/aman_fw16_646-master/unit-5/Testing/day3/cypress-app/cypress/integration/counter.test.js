describe("Counter Tests",function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/")
    })
it("Button should eists",function(){
    cy.get(".counterBtn").should("exist")
})

it("Check button text",function(){
    cy.get(".counterBtn").should("have.text","Count:0")
})

it("Check text after  click",()=>{
    cy.get(".counterBtn").click();
    cy.get(".counterBtn").should("have.text","Count:1")
})

})
 

describe("number Test",()=>{
    beforeEach(function(){
        cy.visit("http://localhost:3000/")
    })
    it("basic",()=>{
        cy.intercept("GET", "http://localhost:8080/count",{
            value : 100
        })
        cy.get(".cb").should("have.text","The Number is 100")
    })
    it("post",()=>{
        cy.intercept("POST","http://localhost:8080/count",{
            value:1
        }).as("numberReq")
        
        cy.get(".cb").click();
        cy.get(".cb").click();
        cy.wait("@numberReq")
        cy.get(".cb").should("have.text","The Number is 2")
    })
})