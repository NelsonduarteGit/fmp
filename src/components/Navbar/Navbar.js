import logo from "../../assets/thejourney.svg";
import { AiOutlineRedo, AiFillInfoCircle } from "react-icons/ai";

import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <div>
          <AiOutlineRedo className="redo" title="redo" />
          <AiFillInfoCircle className="info" title="info" />
        </div>
      </nav>
      <div className="center-logo">
        <img src={logo} alt="logo" onClick={() => navigate("/")} tabIndex="0" />
      </div>
    </header>
  );
}
