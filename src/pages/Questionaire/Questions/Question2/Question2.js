// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Question2.scss";

export default function Question2() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container">
        <section className="left">
          <div className="option" onClick={() => navigate("/questionaire/3")}>
            <h2 className="title">Public Sector</h2>
            <p>
              Elaine Parr, head of public relations and communications at The
              Royal Marsden NHS Foundation Trust, says there is nothing like it:
              "You feel closer to the cause and see that you are having an
              impact on communities through the work you do.". The public sector
              often includes internal and external communication, so it's
              possible you would work with a wide range of communication
              channels to achieve your objectives.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Creativity</li>
                <li>Writing</li>
                <li>Negotiation</li>
                <li>Diplomacy</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="right ">
          <div className="option" onClick={() => navigate("/questionaire/5")}>
            <h2 className="title">Private Sector</h2>
            <p>
              Competitive approach using aggressive marketing strategies. For
              the manufacture and marketing of their products/services, they
              depend on many categories of the public. This means that you'll
              usually find more room for creativity and a wider range of
              channels in the Private Sector, but this all depends on the
              company you work for and it's usually more unstable than the
              public sector. In the private sector, PR tends to blend with other
              company branches, usually Marketing.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Creativity</li>
                <li>Adaptability</li>
                <li>Technical Skills</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
