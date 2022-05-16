// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Question4.scss";

export default function Question4() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container4">
        <section className="left">
          <div
            className="option"
            onClick={() => navigate("/questionaire/Freelance")}
          >
            <h2 className="title">Self Management</h2>
            <p>
              Self-management is an unstable way of life in the beginning as it
              requires you to have a customer portfolio big enough for you to be
              comfortable and have the snowball running. You need a lot of
              discipline to work in your own time and to keep going and keep
              your clients happy, but also to do all of the research and all the
              work by yourself - you are your own business, take care of it!
              <br />
              Self Management roles tend to go for people who like to go all out
              or keep it as a side gig.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Business Management</li>
                <li>Discipline</li>
                <li>Networking</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="right ">
          <div
            className="option"
            onClick={() => navigate("/questionaire/GovPR")}
          >
            <h2 className="title">In-house</h2>
            <p>
              Working in-house allows you to work with more experienced
              professionals in a controlled environment. This tends to be
              perfect for beginners and newly graduated students who are looking
              for their first experience in the Public Relations world. These
              positions tend to be full-time and the contract usually states
              experimental time, this is the period where the company invests in
              you and your time to absorb everything and learn the fundamentals
              of the business and your role. Your experience working in-house
              usually directly correlates with the business itself - structure,
              environment, processes, creativity.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Adaptability</li>
                <li>Interpersonal Skills</li>
                <li>Management</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
