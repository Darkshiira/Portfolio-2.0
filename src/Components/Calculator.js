import { useState } from 'react';
import styled from 'styled-components';

const Calc = styled.div`
    position: absolute;
    top: 0px;
    right: 50px;

    width: 600px;
    height: 400px;
    background: #00091A;
    color: #F0F8FF;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid lightblue;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out;
    margin: 20px;
    &:hover {
        background: #00192A;
        cursor: pointer;
    }

    button {
        width: 50px;
        height: 50px;
        background: #F0F8FF;
        color: #00091A;
        
        border: 2px solid lightblue;
        box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
        transition: all 0.5s ease-in-out;
        margin: 10px;
        &:hover {
            background: #00192A;
            cursor: pointer;
        }
    }

`
const Operatingbox = styled.div`
    width: 90%;
    height: 100%;
    background:#00091A ;
    color: #00091A;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border: 2px solid lightblue;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out;
    margin: 20px;
`

const Solutionbox = styled.div`
    width: 90%;
    height: 50px;
    background: #F0F8FF;
    color: #00091A;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border: 2px solid lightblue;
    box-shadow: 5px 5px 28px 9px rgba(0,0,0,0.5);
    transition: all 0.5s ease-in-out;
    margin: 20px;
    &:hover {
        background: #00192A;
        cursor: pointer;
    }
`

const NumberSquare = styled.div`
    width: 100%;
    height: 100%;
    background: #00091A;
    color: #F0F8FF;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    &:hover {
        background: #00192A;
        cursor: pointer;
    }
`

const Operatorsbox = styled.div`
    background: #00091A;
    color: #F0F8FF;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    &:hover {
        background: #00192A;
        cursor: pointer;
    }
`





const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const state = ["+", "-", "*", "/"];



const Calculator = () => {
    const [currentnumber, setCurrentNumber] = useState(numbers[9]);
    const [aState, setAState] = useState(state[0]);
    const [memory, setMemory] = useState(0);

    const operatingFunction = (state) => {
        setMemory(memory + currentnumber);
        setCurrentNumber(0);
        setAState(state);
    }
    
    const viewState = () => {
        if (aState === "+") {
            setCurrentNumber(parseInt(memory) + currentnumber);
        } else if (aState === "-") {
            setCurrentNumber(parseInt(memory) - currentnumber);
        } else if (aState === "*") {
            setCurrentNumber(parseInt(memory) * currentnumber);
        } else if (aState === "/") {
            setCurrentNumber(parseInt(memory) / currentnumber);
        }
        return currentnumber
    }

  return (
    <Calc>
    <Solutionbox>
        <p>{currentnumber}</p>
    </Solutionbox>
    <Operatingbox>
        <NumberSquare>
        
            {numbers.map((number, index) => 
                <button key={index} onClick={() => setCurrentNumber(parseInt(currentnumber.toString() + number.toString()))}>{number}</button>
                )}
    <button onClick = {() => viewState()}> = </button>
    <button onClick = {() => setCurrentNumber(0)}> C </button>
         </NumberSquare>
    <Operatorsbox>
    {state.map((state, index) =>
        <button key={index} onClick={() => operatingFunction(state)}>{state}</button>)}
    </Operatorsbox>
    </Operatingbox>
    </Calc>
    
  )
}

export default Calculator
