import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Question1.scss";

export default function Question1() {
  const navigate = useNavigate();
  const [awareness, setAwareness] = useState(false);

  return (
    <>
      <Navbar />
      <main className="q1">
        <h2>
          I know what Public Relations is <br />
          and it's position among Marketing and/or Journalism
        </h2>
        <button
          className="primary know"
          onClick={() => navigate("/questionaire/tutorial")}
        >
          I Know
        </button>
        <button className="primary dontknow" onClick={() => setAwareness(true)}>
          I'm not sure
        </button>
        {awareness && (
          <section className="hidden">
            <p>
              The diference is <span className="Marketing">Marketing</span> is
              focused on driving sales and doing so by promoting products,
              services, or ideas.{" "}
              <span className="PR">Public relations (PR)</span> is more focused
              on the maintenance of a positive reputation of a company, brand,
              or person, and while Journalism and{" "}
              <span className="PR">PR </span>
              both tell stories, these stories have a different objective.
              <span className="Journalism"> Journalism</span> is used as a
              channel for giving people a voice and inform them.
              <br /> Organisations are at the center of{" "}
              <span className="PR">Public Relations</span>.
            </p>
            <button
              className="primary"
              onClick={() => navigate("/questionaire/tutorial")}
            >
              Continue
            </button>
            <button className="primary learn">
              <a
                href="https://www.directdevelopmentpr.com/understanding-difference-pr-marketing/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Learn more
              </a>
            </button>
          </section>
        )}
      </main>
    </>
  );
}
