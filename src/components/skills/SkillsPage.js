import React from 'react'
import './skills.css'

function SkillsPage() {
    return (
      <div className="skills" id="skills">
        <h1>Skills and Certifications</h1>
        <h3>Skills</h3>
        <h3>Certificates</h3>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>React Native for mobile apps</li>
          <li>Node Js</li>
          <li>Django</li>
          <li>Mongo DB</li>
          <li>UI/UX with Figma</li>
        </ul>
        <ul>
          <li>Kampabits Certificate of IT Training</li>
          <li>Refactory CErtificate of SOftware Engineering</li>
          <li>FreeCode Camp Certificate of Responsive Web Development</li>
          <li>FreeCode Camp Certificate of FRontEnd LIbraries - REact Js, BootStrap, SASS, JQuery</li>
        </ul>
      </div>
    );
}

export default SkillsPage
