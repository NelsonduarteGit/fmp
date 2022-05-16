// import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Question6.scss";

export default function Question6() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container6">
        <section className="left">
          <div
            className="option"
            onClick={() => navigate("/questionaire/SocialReform")}
          >
            <h2 className="title">Society Reform</h2>
            <p>
              Public Relations have a huge impact on our society, most of the
              communication you have seen needs to be checked and approved by a
              public relations practitioner and/or a whole department branch of
              them, this means that public relations can have the power to
              impact millions of lives and have such impact on our society it
              was only logical to use this power to reform it to a better
              standard. These roles tend to be very impactful and chaotic, this
              means going against what's considered standard and changing lives
              - be prepared for crisis management sooner or later.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>high adaptability</li>
                <li>Stress proof</li>
                <li>Ethics</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="right ">
          <div
            className="option"
            onClick={() => navigate("/questionaire/SocialMedia")}
          >
            <h2 className="title">Content Creation</h2>
            <p>
              Content creation is one of the easier roles to get into Public
              Relations and is perfect for beginners. These roles tend to be
              highly creative with lots of content creation for social media and
              other Business 2 Clients platforms. You will most likely end as a
              social media manager with opportunities for growing an audience or
              maintaining an existing one, you will work in campaigns and have a
              close relationship with your clients, you will see your project
              grow and you will also have huge responsibilities such as brand
              reputation, so be careful and research your target audience.
            </p>
            <div className="skills">
              <h5>Key Skills</h5>
              <ul>
                <li>Creativity</li>
                <li>Technical Skills</li>
                <li>Online Presence</li>
                <li>Online Platforms</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
