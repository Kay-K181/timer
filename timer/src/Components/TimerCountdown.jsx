import { useEffect } from "react";


export default function TimerCountdown({seconds, setSeconds, pause, reset, word}){

    useEffect(() => {
        if(seconds === 0){
            return;
        }

        let timer = setTimeout(() => {
            setSeconds((prevState) => prevState - 1)
        }, 1000);

        return () => clearTimeout(timer)

    }, [seconds, setSeconds])
    
    return (
       <div className="countdownDisplay">
        <div className="timerDisplay">{seconds} {word} remaining.</div>
        {seconds >= 1 && <button type="button" onClick={pause} >Pause</button>}        
        <button type="button" onClick={reset}>Reset</button>
        </div>
    )
}