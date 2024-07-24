import Image from "next/image";
import Link from "next/link";
import React from "react";
const projectData = [
  {
    title: "Gemini Clone",
    subtitle: "AI prompt Website",
    githubLink: "https://github.com/kiransalve/gemini-clone",
    liveLink: "https://jemini-ai-amber.vercel.app",
    imgUrl: "/gemini.png",
  },
  {
    title: "LetsGo",
    subtitle: "Tour Booking Website",
    githubLink: "https://github.com/kiransalve/letsGo",
    liveLink: "https://lets-go-xi.vercel.app/",
    imgUrl: "/booking.png",
  },
  {
    title: "WallDesign",
    subtitle: "Ecoomerce Website",
    githubLink: "https://github.com/kiransalve/ecom-web-app",
    liveLink: "https://ecom-kiransalve.vercel.app/",
    imgUrl: "/ecom.png",
  },

  {
    title: "Youtube Clone",
    subtitle: "Streaming Website",
    githubLink: "https://github.com/kiransalve/youtube-clone-reactjs",
    liveLink: "http://yt-clone-kiransalve.netlify.app/",
    imgUrl: "/yt.png",
  },
];

const Projects = () => {
  return (
    <div className="">
      <div className="text-center text-2xl font-bold mb-4">My Projects</div>
      <div className="mx-auto gap-6 flex max-w-7xl flex-wrap justify-center xl:justify-start items-center">
        {projectData.map(
          ({ githubLink, liveLink, subtitle, title, imgUrl }, index) => (
            <div
              className="rounded-md cursor-pointer flex flex-col md:flex-row h-full p-1 md:mx-0 mx-10"
              key={index}
            >
              <div className="flex flex-wrap gap-5 text-center ">
                <div className="flex flex-col items-center gap-4 rounded-md mx-auto md:mx-0 border-b">
                  <Image
                    src={imgUrl}
                    width={350}
                    height={330}
                    alt={title}
                    className="rounded-md"
                  />
                  <div className="">{title}</div>
                  <div className="">{subtitle}</div>
                  <div className="flex gap-5 mb-3">
                    <Link href={liveLink} target="_blank" className="btn">
                      Live
                    </Link>
                    <Link className="btn" href={githubLink} target="_blank">
                      Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
