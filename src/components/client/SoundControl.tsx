import gsap from "gsap";
import { useEffect, useState } from "react"

export default function SoundControl({
    videoElem
}) {

    const [muted, setMuted] = useState(true);


    useEffect(() => {
        let video = document.getElementById(videoElem) as HTMLVideoElement;
        if (video) video.muted = muted;
    }, [muted])

    useEffect(() => {
        let video = document.getElementById(videoElem) as HTMLVideoElement;
        const onPlaying = () => {
            gsap.to("#sound", {
                opacity: 1
            })
        }
        const onPause = () => gsap.to("#sound", { opacity: 0 })
        video.addEventListener('play', onPlaying);
        video.addEventListener('pause', onPause);

        return () => {
            video.removeEventListener('play', onPlaying);
            video.removeEventListener('pause', onPause);
        }
    }, []);


    return (
        <button
            onClick={() => setMuted(!muted)}
            id="sound"
            className="bg-white shadow-sm p-[2px] rounded-full"
        >
            {
                muted ? <svg
                    id="unmuted"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"

                    data-darkreader-inline-fill=""
                ><path
                    d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"
                ></path><path
                    d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"
                ></path></svg
                > : <svg
                    id="muted"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"

                    data-darkreader-inline-fill=""
                ><path
                    d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"
                ></path></svg
                >
            }

        </button>
    )
}