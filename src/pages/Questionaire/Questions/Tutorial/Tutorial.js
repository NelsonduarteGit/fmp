import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../../components/Navbar/Navbar";
import "./Tutorial.scss";

export default function Tutorial() {
  const navigate = useNavigate();
  const [tutorial, setTutorial] = useState({
    part1: true,
    part2: false,
    part3: false,
  });

  return (
    <>
      <Navbar />
      <div className="tutorialcontainer">
        <section className="left">
          {!tutorial.part1 && (
            <div className="option" onClick={() => navigate("/questionaire/2")}>
              <h2>Option 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                purus in mollis nunc. Ac turpis egestas sed tempus urna et
                pharetra. Eget duis at tellus at. Tellus mauris a diam maecenas
                sed enim ut sem. Ornare quam viverra orci sagittis eu volutpat.
                Faucibus pulvinar elementum integer enim neque volutpat ac
                tincidunt. Egestas purus viverra accumsan in nisl nisi
                scelerisque eu ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing diam donec.
              </p>
            </div>
          )}
        </section>

        <section className="right">
          {!tutorial.part1 && (
            <div className="option">
              <h2>Option 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                purus in mollis nunc. Ac turpis egestas sed tempus urna et
                pharetra. Eget duis at tellus at. Tellus mauris a diam maecenas
                sed enim ut sem. Ornare quam viverra orci sagittis eu volutpat.
                Faucibus pulvinar elementum integer enim neque volutpat ac
                tincidunt. Egestas purus viverra accumsan in nisl nisi
                scelerisque eu ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing diam donec.
              </p>
            </div>
          )}
        </section>

        {tutorial.part1 && (
          <section className="modal1">
            <h4>
              This part of the questionaire is all about choosing between 2
              options
            </h4>
            <button
              className="primary tutorial1"
              onClick={() =>
                setTutorial({ part1: false, part2: true, part3: false })
              }
            >
              Next
            </button>
          </section>
        )}
        {tutorial.part2 && (
          <section className="modal2">
            <h4>
              This will be your options, 1 and 2. <br /> <br />
              You will need to choose between one or another.
              <br /> Don't worry, I will provide some information on the
              options.
            </h4>

            <button
              className="primary tutorial1"
              onClick={() =>
                setTutorial({ part1: false, part2: false, part3: true })
              }
            >
              Next
            </button>
          </section>
        )}
        {tutorial.part3 && (
          <section className="modal3">
            <h4>Go ahead, Try yourself!</h4>
            <p>Click one of the options to continue your journey.</p>
          </section>
        )}
      </div>
    </>
  );
}
