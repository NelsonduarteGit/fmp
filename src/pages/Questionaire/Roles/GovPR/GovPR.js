import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./GovPR.scss";

export default function GovPR() {
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
          <h2>Government PR</h2>
          <p>
            Government public relations could be considered the idealized
            version of public diplomacy, at least in the domestic context,
            because the government is identifying and clarifying arguments with
            constituents so they can make their own judgments. Ideally,
            government public relations is used with honesty and sincerity
            because, as an "ideology factory," several competing ideas must be
            addressed by the government and constituents alike (Gelders & Ihlen,
            2010).
            <br /> <br /> Government Public Relations is a socially-responsible
            practice, this means that it is your job to act accordingly to the
            public best interests for a better society.
          </p>

          <a
            href="http://www.inquiriesjournal.com/articles/1012/government-public-relations-public-diplomacy-or-propaganda"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about this role
          </a>
        </section>
        {show && (
          <section className="specialisation">
            <h3>Recomended Specialisation</h3>
            <h2>Crisis Management</h2>
            <p>
              Crisis communications are one of the most important functions of
              contemporary PR.
              <br /> An effective crisis management strategy ensures that
              businesses and those in the public eye can maintain a high level
              of trust and a positive relationship between themselves and the
              public.
              <br /> As Warren Buffett famously said, “it can take 20 years to
              build a reputation and only five minutes to ruin it.” You will
              specialise in creating and maintaining reputations, creating
              crisis scenarios and planning how to overcome them, consult
              clients on how to avoid certain scenarios and what to do when they
              happen. <br />
              <br />
              Crisis management is a very stressful role as you never know when
              it will happen - but it will, and you will need to be quick on
              your feet but also very careful on how you approach the situation
              as it can damage your brand reputation. Key skills: experience,
              management, stress-proof.
            </p>
            <a
              href="https://ronntorossian.medium.com/what-is-the-role-of-pr-in-crisis-management-2b01b1104ae8"
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
