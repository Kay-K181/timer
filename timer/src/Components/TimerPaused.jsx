

export default function TimerPaused ({seconds, reset, startTimer, word}){
    return (
        <div className="pauseDisplay">
        <div className="pausedSeconds">{seconds} {word} remaining. Timer is paused!</div>

        <button type="button" onClick={startTimer}>Resume</button>        
        <button type="button" onClick={reset}>Reset</button>
        </div>
    )
}