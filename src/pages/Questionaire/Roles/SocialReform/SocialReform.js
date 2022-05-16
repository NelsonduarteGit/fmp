import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./SocialReform.scss";

export default function SocialReform() {
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
          <h2>Social Reform</h2>
          <p>
            "Has an ancient-and many would say, glorious-history" (R. Smith,
            2013)
            <br /> This role can sometimes overlap with non-profit or
            nongovernmental orgs but it differs from them as it is
            movement-based rather than linked to a specific organisation.
            <br /> You might find yourself working with a company or even
            various, but your movement goes past that relationship and it's not
            chained to them. <br />
            Examples of Social Reform: abolition of slavery, religious freedom,
            gay rights, environmental protection, etc…
          </p>

          <a
            href="https://www.routledge.com/Public-Relations-Activism-and-Social-Change-Speaking-Up/Demetrious/p/book/9781138921863"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about this role
          </a>
        </section>
        {show && (
          <section className="specialisation">
            <h3>Recomended Specialisation</h3>
            <h2>Ethics</h2>
            <p>
              The Internet Encyclopedia of Philosophy explains: “The field of
              ethics, also called moral philosophy, involves systematizing,
              defending, and recommending concepts of right and wrong behaviour”
              <br />
              Ethical behaviour is inherently required in public relations
              practice.
              <br /> PR practitioners advocate for clients and are trusted
              sources of counsel.
              <br /> PR pros have a fiduciary responsibility in building trust
              and are often called upon to be the ‘voice of conscience’ in
              organizations and companies. <br />
              <br />
              Key skills: a high sense of ethics, foresight, neutrality
            </p>
            <a
              href="https://www.bizcommunity.com/Article/196/18/575.html"
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
