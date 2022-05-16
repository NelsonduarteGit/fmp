import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Homepage from "./pages/Homepage/Homepage";

// questionaire
import Questionaire from "./pages/Questionaire/Questionaire";
import Question1 from "./pages/Questionaire/Questions/Question1/Question1";
import Question2 from "./pages/Questionaire/Questions/Question2/Question2";
import Question3 from "./pages/Questionaire/Questions/Question3/Question3";
import Question4 from "./pages/Questionaire/Questions/Question4/Question4";
import Question5 from "./pages/Questionaire/Questions/Question5/Question5";
import Question6 from "./pages/Questionaire/Questions/Question6/Question6";
import Tutorial from "./pages/Questionaire/Questions/Tutorial/Tutorial";

// Roles
import PublicDiplomacy from "./pages/Questionaire/Roles/PublicDiplomacy/PublicDiplomacy";
import GovPR from "./pages/Questionaire/Roles/GovPR/GovPR";
import Freelance from "./pages/Questionaire/Roles/Freelance/Freelance";
import CorporatePR from "./pages/Questionaire/Roles/CorporatePR/CorporatePR";
import ContentCreation from "./pages/Questionaire/Roles/ContentCreation/ContentCreation";
import SocialReform from "./pages/Questionaire/Roles/SocialReform/SocialReform";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/questionaire">
          <Route index element={<Questionaire />} />
          <Route path="1" element={<Question1 />} />
          <Route path="2" element={<Question2 />} />
          <Route path="3" element={<Question3 />} />
          <Route path="4" element={<Question4 />} />
          <Route path="5" element={<Question5 />} />
          <Route path="6" element={<Question6 />} />
          <Route path="tutorial" element={<Tutorial />} />

          <Route path="GovPR" element={<GovPR />} />
          <Route path="Freelance" element={<Freelance />} />
          <Route path="CorporatePR" element={<CorporatePR />} />
          <Route path="SocialReform" element={<SocialReform />} />
          <Route path="ContentCreation" element={<ContentCreation />} />
          <Route path="PublicDiplomacy" element={<PublicDiplomacy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
