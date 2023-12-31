import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";
import img from '../../../assets/banner/login.jpg'
import Swal from "sweetalert2";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pError, setError] = useState("");
    const { userLogin, googleLogin } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
          .then((res) => {
            Swal("success", "Your Login SuccessFully", "success");
            navigate(location?.state ? location.state : "/");
            console.log(res?.user)
          })
          .catch((error) => setError(error.message));
      };
      const handleWithGool = () => {
        googleLogin()
          .then((res) => {
            navigate(location?.state ? location.state : "/");
            console.log(res?.user)
          })
          .catch((error) => {
            setError(error.message);
            Swal("error", "your Login not ", "error");
          });
      };
    return (
        <div>
            <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/4dLtCgC/images.jpg)'}}>
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-10">
              <img className="w-full h-screen" src={img} alt="" />
            </div>
            <div className="card ml-10 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-outline btn-success"
                  />
                </div>
              </form>
              <p className="text-center my-5">New to Restaurant Management? <Link className="text-orange-500" to='/signup'>Sign Up</Link> </p>
              <button
                onClick={handleWithGool}
                className="btn btn-outline btn-success mb-6"
              >
                Google
              </button>
              {pError && <p className="text-red-700 font-bold mb-5">{pError}</p>}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;