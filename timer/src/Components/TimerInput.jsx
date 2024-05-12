

export default function TimerInput({seconds, setSeconds, setStatus})
{
    return (
        <div>
            <input type={'number'} min={0} max={60} value={seconds} onChange={(event) => {setSeconds(event.target.value)}} />
            <button type={'button'} onClick={() => {setStatus('started')}}>Start</button>
        </div>
    );
}