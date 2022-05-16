import logo from "../../assets/thejourney.svg";
import astronaut from "../../assets/astronaut.svg";
import travel from "../../assets/travel.svg";

import { BrowserView, MobileView } from "react-device-detect";

import "./Homepage.scss";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <BrowserView>
        <div className="background">
          <img src={astronaut} alt="astronaut" className="astronaut" />
          <main className="main">
            <img src={logo} alt="The Journey Logo" className="logo" />
            <div>
              <p>
                find your way in the <span>public relations</span> industry
              </p>
              <span>
                <button
                  className="primary"
                  onClick={() => navigate("/questionaire")}
                  tabindex="1"
                >
                  Start Your Journey!
                </button>
              </span>
            </div>
          </main>
          <img src={travel} alt="travel woman" className="travel" />
        </div>
      </BrowserView>
      <MobileView>
        <div className="mobile-background">
          <main className="mobile-main">
            <h2>This is awkward... </h2>
            <h3>This website is not available on mobile yet.</h3>
          </main>
        </div>
      </MobileView>
    </>
  );
}
