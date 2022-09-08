import { fireEvent, render,screen } from "@testing-library/react"
import App from "../App"
import Btn from "./Btn";



describe("Checking The Functionalities of Buttons",()=>{

    it("Cheking App is rendering without any error",()=>{
        render(<App></App>);
       let app= screen.getByTestId("app");
       expect(app).toBeInTheDocument();
    })
     
    it("Cheking Add and Reduce button",()=>{
        render(<App></App>);
        let btn1= screen.getByText("ADD")
        let btn2= screen.getByText("REDUCE");
        expect(btn1).toBeInTheDocument();
        expect(btn2).toBeInTheDocument()
    })
    
    it("check Counter value at beggging",()=>{
        render(<App></App>);
        let  h1= screen.getByTestId("count");
        expect(h1).toHaveTextContent(0)
    })

    it("check the Add Button",()=>{
        render(<App></App>);
        let h1=screen.getByTestId("count");
        let addBtn=screen.getByText("ADD");
        fireEvent.click(addBtn);
        expect(h1).toHaveTextContent(5)
    })

    it("check the Reduce Button",()=>{
        render(<App></App>);
        
        let h1=screen.getByTestId("count");
        let reduceBtn=screen.getByText("REDUCE");
        fireEvent.click(reduceBtn);
        expect(h1).toHaveTextContent(-5) 
    })

})

