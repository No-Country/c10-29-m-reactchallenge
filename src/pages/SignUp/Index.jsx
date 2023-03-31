import { Animated } from "react-animated-css";
import CreateAccount from "../../components/CreateAccount";
import "./Index.css";

function Index() {
  return (
    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
      <div className="signup-page">
        <h1>bypass</h1>
        <h4>Creemos tu cuenta</h4>
        <CreateAccount />
      </div>
    </Animated>
  );
}

export default Index;
