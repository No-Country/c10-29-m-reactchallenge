import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css";

const AboutUs = () => {
  return (
    <div class="about-us">
        <div className="nosotros-img">
          <img src="../src/assets/logo.png" alt="Logo" />
          <img src="../src\assets\images\1.png" alt="" />
        </div>

        <div className="contenido-nosotros">
          <p>Somo una plataforma dedicada la comercializacion de tickets para todo tipo de eventos. Nuestro equipo esta coformado por profecionales de alto nivel !Tan apacionados como vos por la musica, los deportes y el arte!</p>
        </div>

        <div className="nosotros-img">
          <img src="../src\assets\images\1.png" alt="" />
          <img src="../src/assets/logo.png" alt="Logo" />
        </div>

        <div className="contenido-nosotros">
          <p>Somo una plataforma dedicada la comercializacion de tickets para todo tipo de eventos. Nuestro equipo esta coformado por profecionales de alto nivel !Tan apacionados como vos por la musica, los deportes y el arte!</p>
        </div>





      {/* <div>
        <Link to={'/'}>
        <button type="submit">Submit</button>
        </Link>
    </div> */}
</div>


  );
};

export default AboutUs;