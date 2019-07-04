import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/header";
import Home from "./components/home";
import "./css/base.css";
//import "./css/main.css";

//import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <main className="mainContent">
        <div className="mainContent__wrap">
          <div className="mainContent__wrap__content">
            <section className="mem1">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae rem eius excepturi suscipit, tenetur, totam, fugiat
                corporis doloribus ea nam sunt natus eos eum perferendis facere
                iure! Cum, sunt repellendus.
              </p>
            </section>
            <section className="mem">
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae rem eius excepturi suscipit, tenetur, totam, fugiat
                corporis doloribus ea nam sunt natus eos eum perferendis facere
                iure! Cum, sunt repellendus.
              </p>
            </section>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default App;
