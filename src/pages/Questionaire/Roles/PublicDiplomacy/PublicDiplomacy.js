import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./PublicDiplomacy.scss";

export default function PublicDiplomacy() {
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
          <h2>Public Diplomacy</h2>
          <p>
            Public Diplomacy is usually tight with political communication and
            government public relations.
            <br /> You will be responsible for communication with other
            organizations and other important and powerful groups, responsive to
            public opinion and media coverage. <br />
            Communication in this role is the most valuable asset as you will
            often represent powerful organizations and/or clients.
          </p>

          <a
            href="https://twenty7inc.in/the-role-of-pr-in-event-planning/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about this role
          </a>
        </section>
        {show && (
          <section className="specialisation">
            <h3>Recomended Specialisation</h3>
            <h2>Event Planning and Management</h2>
            <p>
              PR plays a critical role in the success of any event and there's a
              variety of channels available to take advantage of the promotion
              of an event. Events help a company take off and reach its
              objectives, this can be achieved through strategic PR campaigns
              and research that will help you maximise your event's value. You
              will need to identify your target audience and what channel will
              target the best, make sure your communication message it's passed
              on properly, create all the buzz for it and evaluate it in the
              end.
            </p>
            <a
              href="http://www.inquiriesjournal.com/articles/1012/2/government-public-relations-public-diplomacy-or-propaganda"
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
