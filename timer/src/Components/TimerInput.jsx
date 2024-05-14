

export default function TimerInput({seconds, setSeconds, startTimer}){
    return(
        <div>
        <input type="number" min={0} max={60} value={seconds} onChange={(event) => {setSeconds(event.target.value)}}/>
        <button type="button" onClick={startTimer}>Start Timer</button>
        </div>
    )
}