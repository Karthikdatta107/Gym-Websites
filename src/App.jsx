import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import JoinUs from './component/JoinUs';
import AboutAndWhyUs from './component/AboutAndWhyUs';  
import MeetOurTeam from './component/MeetOurTeam';
import Pricing from './component/Pricing';
import Footer from './component/Footer';
import TeamPage from './component/TeamPage';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />   
              <AboutAndWhyUs /> 
              <MeetOurTeam />  
              <Pricing />
              <Footer />  
            </>
          }
        />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/about-us" element={<AboutAndWhyUs />} /> {/* Add the About Us route */}
        <Route path="/team" element={<TeamPage />} /> 
        <Route path="/meet-our-team" element={<MeetOurTeam />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}XMLDocument

export default App;
