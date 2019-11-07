import React from "react";
import "./index.css";
import Feedback from "./components/section-six";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/section-two";
import SectionThree from "./components/section-three";
import SectionFour from "./components/section-four";
import SectionFive from "./components/section-five";
export default function Home() {
  return (
    <article className="main-home">
      <article>
        <SectionOne></SectionOne>
      </article>

      <article>
        <SectionTwo></SectionTwo>
      </article>

      <article>
        <SectionThree></SectionThree>
      </article>

      <article>
        <SectionFour></SectionFour>
      </article>

      <article>
        <SectionOne></SectionOne>
      </article>

      <article>
        <SectionFive></SectionFive>
      </article>

      <article>
        <Feedback></Feedback>
      </article>
    </article>
  );
}
