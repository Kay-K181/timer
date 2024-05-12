
export default function TimerPaused({seconds, resume})
{
    return (
        <div>
            {seconds} seconds remaining. Timer is paused!
            <button type={'button'} onClick={() => {resume()}} >Resume</button>
        </div>
    );
}