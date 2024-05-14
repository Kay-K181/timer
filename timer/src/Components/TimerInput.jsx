

export default function TimerInput({seconds, setSeconds, startTimer}){
    return(
        <div className="input">
        <input className="inputValue" type="number" min={0} max={60} value={seconds} onChange={(event) => {setSeconds(event.target.value)}}/>
        <button type="button" onClick={startTimer}>Start Timer</button>
        </div>
    )
}