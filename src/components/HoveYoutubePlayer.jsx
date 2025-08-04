import { useRef } from "react";

const HoverYouTubePlayer = ({ videoId }) => {
  const iframeRef = useRef(null);

  const play = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "playVideo", args: [] }),
      "*"
    );
  };

  const pause = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
      "*"
    );
  };

  return (
    <div
      onMouseEnter={play}
      onMouseLeave={pause}
      className="aspect-[9/16] w-full rounded-xl overflow-hidden"
    >
      <iframe
  ref={iframeRef}
  src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&autoplay=0&controls=0&rel=0&modestbranding=1`}
  className="w-full h-full"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  title={`YouTube Video ${videoId}`}
></iframe>
    </div>
  );
};




export default HoverYouTubePlayer;
