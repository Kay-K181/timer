import React, {useState} from "react";
import Input from "./TimerInput";
import Countdown from "./TimerCountdown";
import Paused from "./TimerPaused";

const statusNotStarted = 'not running';
const statusRunning = 'countdown timer';
const statusPaused = 'paused';

export default function Timer(){
        
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState(statusNotStarted);

    let reset = () => {
        setSeconds(0)
        setStatus(statusNotStarted);
    }

    let pause = () => {
        setStatus(statusPaused);
    }

    let resume = () => {
        setStatus(statusRunning);
    }



    let render = () => {
        switch(status){
            case statusNotStarted: 
                return <Input setSeconds={setSeconds} setStatus={setStatus} />;
            case statusRunning:
                return <Countdown setSeconds={setSeconds} setStatus={setStatus} seconds={seconds} reset={reset} pause={pause}/>;
            case statusPaused:
                return <Paused resume={resume} seconds={seconds}/>;
        }
    }

    return(
        <div>
            {render()}
        </div>     
    )
}