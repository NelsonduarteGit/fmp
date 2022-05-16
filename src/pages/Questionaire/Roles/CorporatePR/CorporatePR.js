import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./CorporatePR.scss";

export default function CorporatePR() {
  //   const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toRef = setTimeout(() => {
      setShow(true);
      clearTimeout(toRef);
    }, 15000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="final">
        <section className="role">
          <h3>Your Public Relation's Role is...</h3>
          <h2>Corporate PR</h2>
          <p>
            "Provides the vehicle for businesses to publicize products, gain
            customers, motivate productivity and workplace safety, and maintain
            a communication link with investors, regulators and industry
            colleagues" (R. Smith, 2013) <br />
            This is a generic position where you will be in charge of a business
            reputation being the first line for every communication and
            strategic planning for future progress. <br /> This is a friendly
            role that encourages practitioners to find a specialisation later in
            their career for progression.
          </p>

          <a
            href="https://www.koffeetech.com/what-is-corporate-pr-and-why-is-it-important/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about this role
          </a>
        </section>
        {show && (
          <section className="specialisation">
            <h3>Recomended Specialisation</h3>
            <h2>Project Management</h2>
            <p>
              Public Relations is a great way to start your career in project
              management, this means that PM doesn't have to be in PR, there is
              PM everywhere in every industry and you being a Public Relations
              practitioner will leave you in the upper hand in this
              specialisation.
              <br /> Project Management is all about making sure the project is
              going according to the plan and all the shareholders are happy and
              this is achieved through communication.
              <br /> You will need to lead different teams and work with
              different leaders from different branches to make sure the project
              is done according to the guidelines and everyone is treated fairly
              and to their full potential. <br />
              <br />
              Key skills: Management, interpersonal skills, stress-proof
            </p>
            <a
              href="https://www.northeastern.edu/graduate/blog/project-manager-responsibilities"
              target="_blank"
              rel="noreferrer"
            >
              Learn more about this specialisation
            </a>
          </section>
        )}
      </div>
    </>
  );
}
