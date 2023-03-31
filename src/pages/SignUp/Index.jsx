import SignUp from "../../components/SignUp";
<<<<<<< HEAD
=======

import { Animated } from "react-animated-css";
import CreateAccount from "../../components/CreateAccount";

>>>>>>> 89afd03e05547de559d57e87aa2394406f0622b3
import "./Index.css";

function Index() {
  return (
<<<<<<< HEAD
    <>
      <SignUp />
    </>
=======
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
      <div className="signup-page">
        <h1>bypass</h1>
        <h4>Creemos tu cuenta</h4>
      <SignUp />
      </div>
    </Animated>

>>>>>>> 89afd03e05547de559d57e87aa2394406f0622b3
  );
}

export default Index;
