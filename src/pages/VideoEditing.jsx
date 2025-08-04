import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
// import { videxp } from "../constants";
import { videoSkills } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import HoverYouTubePlayer from "../components/HoveYoutubePlayer";
import { videos } from "../constants";

const videoedit = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        World of{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Video Editing
        </span>{" "}
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          "Video editing is where the story truly comes to life — not in what
          you capture, but in how you choose to reveal it."
        </p>
      </div>

      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {videoSkills.map((vidskill) => (
            <div className="block-container w-20 h-20" key={vidskill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={vidskill.imageUrl}
                  alt={vidskill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen bg-gray-950 py-10 px-4 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-12">🎥 Some Edits</h1>

        <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.videoId}
              className="bg-gray-950 p-4 rounded-xl shadow-md border border-gray-500 hover:shadow-lg transition-shadow duration-300 "
            >
              <h2 className="text-lg font-semibold text-center mb-3">
                {video.title}
              </h2>
              <HoverYouTubePlayer videoId={video.videoId} />
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default videoedit;
