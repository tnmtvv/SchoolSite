import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router";
import { Navigate } from 'react-router-dom';
import { useFavicon } from '@mantine/hooks';
import Menu from "./components/Menu/Menu";
import Home from './pages/Home';
import Adults from "./pages/Adults";
import ChildrenPage from "./pages/Children";
import Exams from "./pages/Exams";
import Teachers from "./pages/Teachers";
import Languages from "./pages/Languages";
import ConversationClub from "./pages/ConversationClub";
import FooterLinks from "./components/Footer/Footer";
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, [])

  const [favicon, setFavicon] = useState('https://i.imgur.com/4AcBxDh.png');
  // const setTwitterFavicon = () => setFavicon('https://i.imgur.com/4AcBxDh.png');
  // const setMantineFavicon = () => setFavicon('https://i.imgur.com/4AcBxDh.png');
  useFavicon(favicon);

  return (
    <div className="App">
      <div data-aos="fade-down" data-aos-duration="800">
        <Router>

          <Menu />

          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/Children" element={<ChildrenPage />} />
            <Route path="/Adults" element={<Adults />} />
            <Route path="/ConversationClub" element={<ConversationClub />} />
            <Route path="/Languages" element={<Languages />} />
            <Route path="/Exams" element={<Exams />} />
            {/* <Route path="/Teachers" element={<Teachers />} /> */}
          </Routes>

        </Router>
      </div>
      <FooterLinks />
    </div>
  );
}

export default App;
