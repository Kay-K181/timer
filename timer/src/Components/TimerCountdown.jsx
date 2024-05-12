import {useEffect} from "react";

export default function TimerCountdown({seconds, setSeconds, reset, pause})
{
    useEffect(() => {
        let timeout = setTimeout(() => {

            if (seconds === 0) {
                return;
            }
            setSeconds(seconds - 1);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, [seconds]);

    return (
        <div>
            {seconds} seconds remaining

            <button className={'reset-button'} type={'button'} onClick={() => {reset()}} >Reset</button>
            {seconds > 0 ?
                <button className={'reset-button'} type={'button'} onClick={() => {pause()}}>Pause</button>
                :
                ''
            }

        </div>
    );
}