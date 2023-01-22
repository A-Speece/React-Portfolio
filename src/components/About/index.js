import React from "react";
import selfImage from "../../assets/cover/self-image.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <img src={selfImage} class="myself" alt="wooden background"></img>
        <p>
          Helvetica put a bird on it church-key Blue Bottle banjo bespoke brunch
          Etsy authentic Marfa quinoa typewriter plaid direct trade small batch
          wayfarers bicycle rights cliche craft beer gastropub single-origin
          coffee Godard Carles you probably haven't heard of them irony pickled
          kitsch synth sriracha gentrify literally heirloom blog Truffaut paleo
          scenester
        </p>
      </div>
    </section>
  );
}

export default About;
