import "./App.scss";

import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Main } from "./Components/Main/Main";

import { Home } from "./Pages/Home";
import { Collection } from "./Pages/Collection";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Collection" element={<Collection />} />
          </Routes>
        </Main>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;

/*

function App() {
  return (
    <>
      <HeaderComponent />
      <Main>
        <WhatsNewComponent />
      </Main>
      <FooterComponent />
    </>
  );
}

*/
