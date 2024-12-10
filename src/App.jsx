import "./App.scss";

import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./Components/Main/Main";

import { Home } from "./Pages/Home";
import { Collection } from "./Pages/Collection";



// link i WhatsNewButton


function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Collection" element={<Collection />} />
          </Routes>
        </Main>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
