import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";
import Home from './pages/Home';
import Adults from "./pages/Adults";
import ChildrenPage from "./pages/Children";
import Exams from "./pages/Exams";
import Teachers from "./pages/Teachers";
import Languages from "./pages/Languages";
import ConversationClub from "./pages/ConversationClub";
import FooterLinks from "./components/Footer/Footer";
import store from './store'

function App() {
 
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
      <Menu/>

      <Routes>
      <Route path="/Home" exact element={<Home/>} />
      <Route path="/Children" element={<ChildrenPage/>} />
      <Route path="/Adults" element={<Adults/>} />
      <Route path="/ConversationClub" element={<ConversationClub/>} />
      <Route path="/Languages" element={<Languages/>} />
      <Route path="/Exams" element={<Exams/>} />
      <Route path="/Teachers" element={<Teachers/>}/>
      </Routes>

      </Router>
      <FooterLinks/>
      </div>
    </Provider>
    
  );
}

export default App;
