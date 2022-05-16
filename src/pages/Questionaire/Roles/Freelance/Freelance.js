import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Freelance.scss";

export default function Freelance() {
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
          <h2>Freelance</h2>
          <p>
            Freelance PR looks a lot like the traditional corporate structure,
            but the primary difference is that you oversee every part of the
            process. <br />
            Starting a personal PR business isn't just about public relations –
            it's also about finding and onboarding new clients, managing money,
            and marketing your personal brand. You need a lot of discipline to
            work in your own time and to keep going and keep your clients happy,
            but also to do all of the research and all the work by yourself -
            you are your own business, take care of it! <br />
            “To get started, select a specific skill that you’re particularly
            passionate about and talented in. This will empower you to not only
            best serve your future clients, but to get those clients in the
            first place.” - Lauren Gray
          </p>

          <a
            href="https://weareindy.com/blog/how-to-start-a-freelance-pr-business"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about this role
          </a>
        </section>
        {show && (
          <section className="specialisation">
            <h3>Recomended Specialisation</h3>
            <h2>Independent Consultant</h2>
            <p>
              Becoming an independent consultant is a unique option for those
              looking for a role with a bit more flexibility than a traditional
              nine-to-five job.
              <br /> Independent consultants provide services to a variety of
              clients, rather than working for one agency or company.
              <br />
              Independent consultants often freelance for more than one company,
              being in charge of improving one's organisation's operations and
              developing strategies to resolve issues. This role is wide and you
              often will work in what you have in the beginning and in what you
              want later on - this is not a beginner-friendly role as you need
              to have the experience to prove your worth.
            </p>
            <a
              href="https://www.indeed.com/career-advice/finding-a-job/what-is-independent-consultant"
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
