import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "space-weather-app",
      description: "HTML,CSS,JavaScript",
      link: "https://a-speece.github.io/Space-Weather-App/",
      repo: "https://github.com/A-Speece/Space-Weather-App.git",
    },
    {
      name: "local-weather-dashboard",
      description: "HTML,CSS,JavaScript",
      link: "https://a-speece.github.io/Local_Weather_Dashboard/",
      repo: "https://github.com/A-Speece/Local_Weather_Dashboard.git",
    },
    {
      name: "social-network-api",
      description: "Mongo/Mongoose Api",
      link: "https://app.castify.com/view/249a71a2-0ced-4484-8aa6-30f615b85e20",
      repo: "https://github.com/A-Speece/Social-Network-API.git",
    },
    {
      name: "just-another-text-editor",
      description: "Progressive Web Application",
      link: "https://fathomless-coast-41872.herokuapp.com/",
      repo: "https://github.com/A-Speece/Text_Editor.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
