// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Question3.scss";

export default function Question3() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container3">
        <section className="left">
          <div className="option" onClick={() => navigate("/questionaire/4")}>
            <h2 className="title">Internal Comms</h2>
            <p>
              Internal communications (IC) is all about promoting effective
              communications among people within an organization. <br />
              It involves producing and delivering messages and campaigns on
              behalf of management, as well as facilitating a dialogue with the
              people who make up the organization. This can mean anything from
              announcing a new policy or informing people of an upcoming event.
              Internal Comms tend to be more effective when it's an
              interdisciplinary effort, overseen by leaders from multiple
              departments.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Speaking</li>
                <li>Writing</li>
                <li>Interpersonal Skills</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="right ">
          <div
            className="option"
            onClick={() => navigate("/questionaire/PublicDiplomacy")}
          >
            <h2 className="title">External Communication</h2>
            <p>
              External Communications or External PR works towards creating,
              building and establishing a strong reputation for the company you
              work for, this means preparing communication that will be seen and
              judged by clients and other external stakeholders. You will often
              find yourself networking with other professionals like journalists
              and keeping a strong and close relationship with people from
              similar industries tends to ease your job when it's time to get
              your communication out there.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Writing</li>
                <li>Interpersonal Skills</li>
                <li>Foresight</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
