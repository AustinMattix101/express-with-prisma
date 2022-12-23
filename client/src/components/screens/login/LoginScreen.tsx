import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { GitHubIcon, TwitterIcon, FacebookIcon, GoogleIcon } from "../../assets/components/svg";
// import logo from '../../assets/logo/logo.svg';

const LoginScreeen = ({ history }:any) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
      if (localStorage.getItem("authToken")) {
        history.push("/");
        navigate("/")
      }
    }, [history, navigate]);
    

    const loginHandler = async (e:any) => {
        e.preventDefault();

        const config = {
            headers: {
               "Content-Type": "application/json" 
            }
        }

        try {

            const { data } = await axios.post("/api/auth/login", { email, password}, config);

            localStorage.setItem("authToken", data.token);

            setStatus(data.status);
            setMessage(data.message);
            setData(data.data);

            history.push("/");
        
            if (location.state?.from) {
                navigate(location.state.from);
            } else {
                navigate("/");
            }

        } catch (error:any) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    const togglePassword = async () => {
        if(passwordType === "password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
    }

    return(
        <div className="login-screen">
            <div className="modal modal-signin position-static d-block bg-transparent pt-5 pb-3 text-dark" tabIndex={-1} role="dialog">
                <div className="modal-dialog pt-5" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0"> 
                            <h2 className="fw-bold mb-0">Sign in</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <span>{message}</span><br/>
                            <span>{status}</span><br/>
                            <span>{data}</span>
                            {error && <span className="error-message">{error}</span>}

                        <div className="modal-body p-5 pt-0">
                            <form className="register-screen__form" onSubmit={loginHandler}>

                                <div className="form-floating mb-3">
                                    <input 
                                    type="email" 
                                    required 
                                    id="email"
                                    className="form-control rounded-4"
                                    autoComplete="true"
                                    placeholder="name@example.com"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="email">Email address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                    type={passwordType} 
                                    required 
                                    id="password"
                                    className="form-control rounded-4" placeholder="Password"
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="password">Password
                                    </label>
                                    <Link to="/forgotpassword" className="login-screen__forgotpassword" tabIndex={4}>Forgot your password?</Link>
                                </div>

                                <div className="text-center mb-3"><button type="button" className="btn btn-outline-secondary" onClick={togglePassword}><span>Show Password</span></button></div>

                                <div>
                                    <button className="w-100 btn btn-lg btn-warning" type="submit">Sign in</button>
                                </div>

                                <div className="text-center">
                                    <div className="checkbox mb-3">
                                        <label>
                                        <input type="checkbox" value="rememberme"/> Remember me!
                                        </label>
                                    </div>
                                </div>

                                <small className="text-muted">By clicking Sign in, you agree to the terms of use.</small>
                                <hr className="my-4"/>
                                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" type="submit">
                                    <svg className="bi me-1" width="16" height="16">{<GoogleIcon/>}</svg>
                                    Sign up with Google
                                </button>
                                <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-4" type="submit">
                                    <svg className="bi me-1" width="16" height="16">{<GitHubIcon/>}</svg>
                                    Sign up with GitHub
                                </button>
                                <button className="w-100 py-2 mb-2 btn btn-outline-info rounded-4" type="submit">
                                    <svg className="bi me-1" width="16" height="16">{<TwitterIcon/>}</svg>
                                    Sign up with Twitter
                                </button>
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                                    <svg className="bi me-1" width="16" height="16">{<FacebookIcon/>}</svg>
                                    Sign up with Facebook
                                </button>

                                <span className="register-screen__subtext">Don't have an account? <Link to="/signup">Sign up</Link></span>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default LoginScreeen;