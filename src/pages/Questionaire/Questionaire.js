import { useNavigate } from "react-router-dom";

import "./Questionaire.scss";

import Navbar from "../../components/Navbar/Navbar";

export default function Questionaire() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main>
        <h2>
          Hello there! I'm Journey <br /> What's your name?
        </h2>
        <form>
          <input
            type="text"
            name="First and Last Name"
            placeholder="John Doe"
          ></input>
        </form>
        <button className="primary" tabindex="0" onClick={() => navigate("1")}>
          Next
        </button>
      </main>
    </>
  );
}
