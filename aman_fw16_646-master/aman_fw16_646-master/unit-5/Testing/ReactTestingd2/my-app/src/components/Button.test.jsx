
import {fireEvent, getByTestId, render,screen} from "@testing-library/react"
import App from "../App"
import Button from "./Button"
import renderer from "react-test-renderer"


describe("Button test", ()=>{

    it("should have button in dom", ()=>{
      render(<Button>Click Me</Button>)


      let button = screen.getByText("Click Me");
      expect(button).toBeInTheDocument();
    })

    it("should have button id",()=>{
        render(<Button>Click Me</Button>)

        let button = screen.getByTestId("cButton");
        expect(button).toBeInTheDocument();
    })

    it("check empty button",()=>{
        render(<Button></Button>);

        let button = screen.getByTestId("cButton");
        expect(button).toBeEmptyDOMElement();
    })


    it("should change theme",()=>{
        render(<App></App>)

        let h3= screen.getByText("Theme is light");
        expect(h3).toHaveTextContent("light");

        let themeButton=screen.getByText("change theme");
        fireEvent.click(themeButton);
        expect(h3).toHaveTextContent("dark")
    })

    it("should call given function", ()=>{
        const mockfn= jest.fn();
        render(<Button onClick={mockfn} >Click Me</Button>);

        const btn= screen.getByText("Click Me");
        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(mockfn).toBeCalledTimes(2)
    })

    it("Should match snapshot",()=>{
        const tree= renderer.create(
            <Button colorScheme={"red"} variant="ghost">Add Counter</Button>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })

   

})