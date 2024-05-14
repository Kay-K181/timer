import { useState } from "react"
import TimerInput from "./TimerInput";
import TimerCountdown from "./TimerCountdown";
import TimerPaused from "./TimerPaused";


export default function Timer(){

    const timerNotStarted = 'not started';
    const timerRunning = 'timer running';
    const pauseTimer = 'timer paused';
    
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState(timerNotStarted);

    let startTimer = () => {
        setStatus('timer running')        
    }

    let reset = () => {
        setStatus(timerNotStarted);
        setSeconds(0);
    }

    let pause = () => {
        setStatus(pauseTimer);
    }
   
    let render = () => {
        switch(status){
            case timerNotStarted:
                return <TimerInput seconds={seconds} setSeconds={setSeconds} setStatus={setStatus} startTimer={startTimer} />;
            case timerRunning:
                return <TimerCountdown seconds={seconds} setSeconds={setSeconds} setStatus={setStatus} pause={pause} reset={reset} />
            case pauseTimer:
                return <TimerPaused startTimer={startTimer} reset={reset} seconds={seconds} />
    }

    }


    return(
        <>
            { 
              render()  
            }                
            
        </>
    )
}