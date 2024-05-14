

export default function TimerPaused ({seconds, reset, startTimer}){
    return (
        <div>
        {seconds} seconds remaining. Timer is paused!

        <button type="button" onClick={startTimer}>Resume</button>        
        <button type="button" onClick={reset}>Reset</button>
        </div>
    )
}