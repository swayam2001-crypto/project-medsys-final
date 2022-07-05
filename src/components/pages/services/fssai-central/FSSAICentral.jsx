import React from "react";
import "./fssai_central.css";

import Header from "./components/Header";
import LeftContent from "./components/LeftContent";
import RightContent from "./components/RightContent";
import {TabTitle} from '../../../Utillity';


function App() {
  TabTitle('FSSAI Central License - medsysconsultancy.com');
  
  return (
    <>
      <Header />
      <section className="main-content">
        <LeftContent />
        <RightContent />
      </section>
    </>
  );
}

export default App;
