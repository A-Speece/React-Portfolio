import React from "react";
import selfImage from "../../assets/cover/self-image.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <img src={selfImage} class="myself" alt="wooden background"></img>
        <p>
          Hello, My name is Anthony Speece, and i started my journey as a
          programer back in 2018. I started of working for an Insurance company
          where i specialized in back-end programming using languages such as
          IBM I Series RPGLE as well as SQL query's and reports. I am now
          looking forward to what the future holds as i complete my Full Stack
          Web Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
