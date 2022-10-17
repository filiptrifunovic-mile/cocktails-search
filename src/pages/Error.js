import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! its a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back to home page
        </Link>
      </div>
    </section>
  );
}

export default Error;
