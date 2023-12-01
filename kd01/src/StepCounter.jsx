import {useState} from "react";

export const StepCounter = () => {
    const [steps, setSteps] = useState(0);

    // const incrementStepCounter = () => {
    //     setSteps(steps + 1);
    // };

    const incrementStepCounter = () => {
        setSteps((prevState) => prevState + 1);
    };

    return (
        <div>
            <div>Today you took {steps} steps</div>
            <br/>
            <button onClick={incrementStepCounter}>I took 1 more step</button>
            <button onClick={() => {
                incrementStepCounter();
                incrementStepCounter();
                incrementStepCounter();
                incrementStepCounter();
                incrementStepCounter();
            }}>I took 5 more steps</button>
        </div>
    );
};