import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "./App.css";
import logo from './logo.jpg';

const App = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      container.appendChild(dot);
    }

    let dotAll = container.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
    });

    animation
      .add({
        rotateZ: 180,
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        opacity: 1,
      })
      .add({
        borderRadius: 50,
      })

      .add({
        scale: 0.2,
        opacity: 0.2,
      })

      .add({
        rotateZ: 180,
        translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
        translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
        opacity: 1,
      })

      .add({
        scale: 1,
        borderRadius: 0,
      })
      .add({
        rotateZ: -90,
      });

  }, []);

  return (
    <div>

      {/* Header Start */}

      <header>

        {/* Header Logo */}

        <a href="#Profile" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Sanjaya Kumar Nayak</span>
        </a>

        {/* Navigation Bar */}


        <ul>
          <li>
            <a href="home" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="https://sanjayy.netlify.app/" target="_blank">
              Project
            </a>
          </li>

          <li>
            <a href="https://contact-umber.vercel.app/" target="_blank">
              Contact
            </a>
          </li>

          <li>
            <a href="https://github.com/Sanjayaa02" target="_blank">
              Github
            </a>
          </li>
        </ul>

      </header>

      {/* Header End */}

      {/* Section Start */}

      <section>

        {/* Content Section Start */}

        <div className="Content">
          <h2>
            Hello Everyone My Name is <b>Sanjaya</b>
          </h2>

          <p>
            Hello viewers, I am Sanjaya Kumar Nayak a motivated Computer Application Student Skilled in Cloud Computing and web development.
            Open to Work and eager to contribute as a team player. Let’s make something great together.
          </p>

          <a href="/Sanjaya Kumar Nayak Resume Updated.pdf" download="Sanjaya Kumar Nayak Resume Updated.pdf" className="btn">
            Resume
          </a>
        </div>

        {/* Content Section End */}

        {/* Animation Section */}

        <div className="container" ref={containerRef}>

        </div>



      </section>

        {/* Section End */}

    </div>
  );
};

export default App;
