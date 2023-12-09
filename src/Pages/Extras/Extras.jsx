import { Link } from "react-router-dom";

const Extras = () => {
  return (
    <div>
      <div
        className="hero min-h-screen fixed"
        style={{ backgroundImage: "url(https://i.ibb.co/MSrCvbD/img4.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/blog" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
