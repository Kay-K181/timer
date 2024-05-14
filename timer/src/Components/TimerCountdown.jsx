import { useEffect } from "react";


export default function TimerCountdown({seconds, setSeconds, pause, reset, setStatus}){

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
       <div>
        {seconds} seconds remaining
        {seconds >= 1 ?
            <button type="button" onClick={pause} >Pause</button>
        :
            ''
        }
        
        <button type="button" onClick={reset}>Reset</button>
        </div>
    )
}