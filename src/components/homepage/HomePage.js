import React, { useEffect, useRef} from "react";
import "./home.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { init } from "ityped";

function HomePage() {
  const textRef = useRef()

  useEffect(() => {
    console.log(textRef)
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      
      strings: ["Web Developer", "UI/UX Designer", "Full Stack Developer!"],
    });
  }, [])
  return (
    <div className="rapper" id="home">
      <div className="lef">
        <div className="imageContainer">
          <img src="assets/img3.png" alt="" />
        </div>
      </div>
      <div className="rig">
        <div className="frame">
          <h2>Hi There! I'm</h2>
          <h1 id="name">Pauline Nalwanga</h1>
          <h2></h2>
          <h4>
            Am an interesting <span ref={textRef}></span>{" "}
          </h4>
          <a href="#port" className="arrow">
            <ArrowDropDownIcon sx={{ fontSize: 100 }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
