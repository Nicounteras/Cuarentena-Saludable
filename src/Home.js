import React from "react"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import img1 from "./img-1.jpg"

function Home() {
  return (
    <>
    <div className="complete-home-background">
      <h1>
        Un blog enfocado en la salud
      </h1>
      <h4>
        Encuentra información para mejorar tu salud física y mental durante el confinamiento
      </h4>
      <Link>
      <article>
        <img src={img1}/>
        <h2>
          Cinco actividades con las que puedes combatir el aburrimiento y desestresarte
        </h2>
      </article>
      </Link>
      <Link>
      <article>
        <img src={img1}/>
        <h2>
          Cinco actividades con las que puedes combatir el aburrimiento y desestresarte
        </h2>
      </article>
      </Link>
      <Link>
      <article>
        <img src={img1}/>
        <h2>
          Cinco actividades con las que puedes combatir el aburrimiento y desestresarte
        </h2>
      </article>
      </Link>
      <Link>
      <article>
        <img src={img1}/>
        <h2>
          Cinco actividades con las que puedes combatir el aburrimiento y desestresarte
        </h2>
      </article>
      </Link>
    </div>
    </>
  );
}


export default Home;