import SignUp from "../../components/SignUp";

import { Animated } from "react-animated-css";

import "./Index.css";

function Index() {
  return (
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
      <div className="signup-page">
        <h1>bypass</h1>
        <SignUp />
      </div>
    </Animated>
  );
}

export default Index;
