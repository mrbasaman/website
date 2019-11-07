import React from "react";
import Service from "../../../icons/Service";
export default function SectionFour({ className }) {
  return (
    <article className="section-four">
      <section className="wrap">
        <section>
          <h2>Let Us Work While You Unwind</h2>
        </section>
        <section>
          <Service></Service>
        </section>
        <section className="s4-cont">
          <p>
            As domestic activities go, house cleaning isn’t one you’d expect to
            gain any residual health benefits from, but it’s true. There’s a
            definite association between clean, orderly, and sanitary
            surroundings and good mental and physical health.
          </p>
        </section>
        <section className="book-button">
          <button>Book in Olny 60 Seconds</button>
        </section>
      </section>
    </article>
  );
}
