import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./ContentCreation.scss";

export default function ContentCreation() {
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
          <h2>Content Creation</h2>
          <p>
            Content Creation is the migration to digital Public Relations, this
            is a fairly new role compared to other roles in the industry, like
            social reform, and it's very appealing to new practitioners.
            <br /> In Content Creation PR you will be managing social platforms
            to appeal to your target audience in a closer relationship, drive
            traffic into your business and build credibility or maintain the
            reputation of your business.
            <br /> Some of the tasks of a Content Creator are blog writing,
            copywriting, infographics, social media management and online
            content like videos and photos.
          </p>

          <a
            href="https://www.mercdigital.co/social-media/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more about this role
          </a>
        </section>
        {show && (
          <section className="specialisation">
            <h3>Recomended Specialisation</h3>
            <h2>Marketing Blend</h2>
            <p>
              Marketing focuses on products (or services), and their price,
              promotion and place (distribution.) These collectively are known
              as the marketing mix or "the four p's".
              <br /> Britain's first professor of public relations suggested
              that added to the classic four Ps of marketing should be for P for
              perception and this is where PR would come in.
              <br /> Marketing is about delivering to your consumer the best
              campaigns and messages you can get and Public Relations are
              specialised in communicating, so this is only obvious that every
              marketing team needs a Public Relations Practitioner and in
              smaller companies, you will often find both very close or even
              joined as one department.
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
