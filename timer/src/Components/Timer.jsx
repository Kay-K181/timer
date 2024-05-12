import {useState} from "react";
import TimerInput from "./TimerInput.jsx";
import TimerCountdown from "./TimerCountdown.jsx";
import TimerPaused from "./TimerPaused.jsx";

const statusNotStarted = 'not-started'
const statusStarted = 'started'
const statusPaused = 'paused'

export default function Timer()
{
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState(statusNotStarted);

    let reset = () => {
        setSeconds(0)
        setStatus(statusNotStarted);
    }

    let pause = () => {
        setStatus(statusPaused)
    }

    let resume = () => {
        setStatus(statusStarted)
    }

    let render = () => {
        switch (status) {
            case statusStarted:
                return <TimerCountdown seconds={seconds} setSeconds={setSeconds} reset={reset} pause={pause} />
            case statusNotStarted:
                return <TimerInput seconds={seconds} setSeconds={setSeconds} setStatus={setStatus} />
            case statusPaused:
                return <TimerPaused seconds={seconds} resume={resume} />
        }
    }

    return (
        <div>
            {
                render()
            }
        </div>
    );
}