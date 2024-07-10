import gsap from "gsap";
import { useEffect } from "react"
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Video() {

    useIsomorphicLayoutEffect(() => {
        const video = document.getElementById('video') as HTMLVideoElement;
        video.addEventListener('loadeddata', () => {
            ScrollTrigger.refresh();
        })
        let ctx = gsap.context(() => {
            gsap.to(video, {
                scrollTrigger: {
                    trigger: "#video-wrapper",
                    start: "top 0",
                    end: "bottom center",
                    pin: true,
                    markers: true,
                    invalidateOnRefresh: true,
                    scrub: true,
                    preventOverlaps: true,
                },
                maxWidth: "100vw",
                onComplete: () => {
                    video.play().catch(() => {
                        video.controls = true;
                    })
                }
            })
        })
        return () => {
            ctx.revert()
        }
    }, []);

    return (
        <div id="video-wrapper" className="relative w-full h-full min-h-svh overflow-hidden">
            <video
                id="video"
                className="top-0 right-0 bottom-0 left-0 absolute mx-auto my-auto rounded-3xl max-w-[65em] h-auto object-cover"
                src="/videoplayback.webm"></video>
        </div>
    )
}