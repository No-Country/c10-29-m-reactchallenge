import { Link } from 'react-router-dom'
import './Index.css'

const NotMatch = () => {
  return (
    <div className="container-not-found">
      <div class="mainbox">
        <div class="err">404</div>
        <div class="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to="/">Home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotMatch;
