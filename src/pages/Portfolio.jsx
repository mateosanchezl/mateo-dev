import React from "react";
import Arrow from "../components/Arrow";

function Portfolio() {
  const content = [
    {
      title: "CatchBlock",
      description:
        "Watch a Deep Q-Learning PyTorch model master Catch Block, a game made in Pygame.",
    },
    {
      title: "Emotion in Tweets",
      description:
        "Emotion in Tweets is a website that can detect a range of 6 emotions in a given tweet or piece of text.",
    },
    {
      title: "Progressive",
      description:
        "A workout log app aimed at encouraging consistent progress through automated progressive overload capabilities.",
    },
  ];
  return (
    <>
      <div id="portfolio" className="flex justify-center items-center h-screen">
        <div className="flex justify-between items-center w-full max-w-4xl px-4">
          {content.map((item) => {
            return (
              <div className="text-center p-4">
                <p className="text-center text-4xl text-white">{item.title}</p>
                <p className="pt-4">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
