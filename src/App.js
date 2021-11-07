// import {BrowserRouter as Router,
// Switch,
// Route,
// Link
// } from 'react-router-dom'
import { useState } from "react";
import "./App.css";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import HomePage from "./components/homepage/HomePage";
import MyProjects from "./components/portfolio/MyProjects";
import SkillsPage from "./components/skills/SkillsPage";
import TopBar from "./components/topbar/TopBar";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar open={menuOpen} setMenu={setMenuOpen} />
      gooooooohhjj
      <Menu open={menuOpen} setMenu={setMenuOpen} />
      <div className="sections">
        <HomePage />
        <AboutPage />
        <MyProjects />
        <SkillsPage />
        <ContactPage />
      </div>
    </div>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">HomePage</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">AboutPage</Link>
    //         </li>
    //         <li>
    //           <Link to="/projects">MyProjects</Link>
    //         </li>
    //         <li>
    //           <Link to="/skills">SKillsPage</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">ContactPage</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Switch>
    //       <Route path="/about">
    //         <AboutPage />
    //       </Route>
    //       <Route path="/projects">
    //         <MyProjects />
    //       </Route>
    //       <Route path="/skills">
    //         <SkillsPage />
    //       </Route>
    //       <Route path="/contact">
    //         <ContactPage />
    //       </Route>
    //       <Route path="/">
    //         <HomePage />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
