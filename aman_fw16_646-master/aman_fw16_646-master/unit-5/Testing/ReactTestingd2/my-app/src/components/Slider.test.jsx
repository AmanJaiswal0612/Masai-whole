import { fireEvent, render, screen } from "@testing-library/react"
import Slider from "./Slider"
import {data} from "./Slider"
import Question from "./Question"



describe("testing slider component",()=>{


it("checking question answer exist or not",()=>{
        render(<Question data={data[0]} ></Question>)
        let question= screen.getByTestId("question");
        let answer= screen.getByTestId("answer");
        expect(question).toBeInTheDocument();
        expect(answer).toBeInTheDocument();
})    
   
it("check question answer value",()=>{
    render(<Slider></Slider>);

    let answer=screen.getByTestId("answer");
    let question=screen.getByTestId("question");
    expect(question).toBeInTheDocument();
    expect(answer).toBeInTheDocument();
    expect(question).toHaveTextContent(data[0].question);
    expect(answer).toHaveTextContent(data[0].answer);
})


it("checking  prev button exist or not",()=>{
    render(<Slider></Slider>)
    let prev= screen.getByTestId("prev");
    expect(prev).toBeInTheDocument();
})

it("checking next button exist or not",()=>{
    render(<Slider></Slider>)
    let next= screen.getByTestId("next");
    expect(next).toBeInTheDocument();
})



it("checking qnext and prev are working or not",()=>{
    render(<Slider></Slider>)
    let next=screen.getByTestId("next");
    let prev=screen.getByTestId("prev");
    let question=screen.getByTestId("question");
    let answer=screen.getByTestId("answer");
    fireEvent.click(next);
    expect(question).toHaveTextContent(data[1].question);
    expect(answer).toHaveTextContent(data[1].answer);
    fireEvent.click(prev);
    expect(question).toHaveTextContent(data[0].question);
    expect(answer).toHaveTextContent(data[0].answer)
})

it("checking next stop at index 2",()=>{
    render(<Slider></Slider>);
    let next=screen.getByTestId("next");
    let question=screen.getByTestId("question");
    fireEvent.click(next);
    fireEvent.click(next);
    expect(question).toHaveTextContent(data[2].question)
    fireEvent.click(next);
    expect(question).toHaveTextContent(data[2].question)
})

it("checking prev stop at index 0 ",()=>{
    render(<Slider></Slider>);
    let next=screen.getByTestId("next");
    let prev=screen.getByTestId("prev");
    let question=screen.getByTestId("question");
    let answer=screen.getByTestId("answer");
    fireEvent.click(prev);
    expect(answer).toHaveTextContent(data[0].answer)
    
})

})