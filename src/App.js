"react-router-dom";

import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Process from "./components/Process";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import TermsConditions from "./components/TermsConditions";
import { TabTitle } from "./components/Utillity";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  TabTitle("Home - medsysconsultancy.com");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/process" element={<Process />}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
          <Route path="/terms&conditions" element={<TermsConditions />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;