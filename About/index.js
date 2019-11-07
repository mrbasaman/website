import React from "react";
import "./index.css";
import ProfQual from "../../icons/Stars";

export default function About(props) {
  return (
    <main className="main">
      <header>
        <article className="first_art">
          <section className="content_sec1">
            <img className="image" src="/logo.png"></img>
          </section>
          <section className="content_sec2">
            <p>
              <h2>A Genie Story</h2>A Genie was held captive in the lamp for
              many many years until one man found it. He rubbed the lamp and
              Genie has appeared, he said to the man “your freed me, I shall
              make your three wishes granted”. And these wishes was Carpet steam
              cleaning, Upholstery cleaning, and House general cleaning. As the
              Genie has magic power, the results were immaculate. And the man
              was happy. Since that time Genie make people happy and healthier!
            </p>
          </section>
        </article>
      </header>

      <article className="second_art">
        <main>
          <h2>We promise You</h2>
        </main>
        <section>
          <ProfQual></ProfQual>
        </section>
      </article>

      <article className="third_art">
        <section className="btn_content">
          <section>
            <p>Schedule Cleaning Now & Get Free Estimate</p>
          </section>

          <section>
            <button className="third_art_btn">Send request</button>
          </section>
        </section>
      </article>

      <article className="fourth_art">
        <main className="teamSecMain">
          <h2>Our Cleanint Experts</h2>
        </main>
        <section className="teamSecOne">
          <img src="/images/team.jpg"></img>
        </section>
        <section className="teamSecTwo">
          <ul>
            <p>Every cleaner is:</p>
            <li>Experienced & professional</li>
            <li>Reference checked</li>
            <li>Interviewed in-person</li>
            <li>Honest and dependable</li>
            <li>Insured & bonded</li>
          </ul>
        </section>
      </article>

      <article className="fifth_art">
        <section className="footer-contact">
          <h2>Get in Touch With Us</h2>
          <p>
            Business hours: 8:00 AM – 6:00 PM<br></br>7 Days a Week<br></br>
            <a href="tel:+61423728837">0423 728 837</a>
          </p>
        </section>
        <section>
          <video
            className="footer-video"
            src="/footer-video.mp4"
            type="video/mp4"
            controls
          ></video>
        </section>
      </article>
    </main>
  );
}
