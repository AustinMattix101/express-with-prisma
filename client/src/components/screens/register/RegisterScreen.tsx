import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import { GitHubIcon, TwitterIcon, FacebookIcon, GoogleIcon } from "../../assets/components/svg";
import { Button, Form } from 'react-bootstrap';

const RegisterScreeen = ({ history }:any) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    // const [success, setSuccess] = useState("");
    // const [status, setStatus] = useState("");
    // const [data, setData] = useState({
    //     email: "",
    //     username: "",
    // });

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          history.push("/");
        }
    }, [history]);
    

    const registerHandler = async (e:any) => {
        e.preventDefault();

        const config = {
            headers: {
               "Content-Type": "application/json" 
            }
        }

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Password do not match!");
        }

        try {
            const { data } = await axios.post("/api/auth/register", {username, email, password}, config);

            setMessage(data.message);
            // setSuccess(data.success);
            // setStatus(data.status);
            // setData(data.data);

            if (data.success === true) {
                return alert(`${data.status}
                Email: ${data.data.email}, 
                Username: ${data.data.username}`);
            }

            history.push("/");

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
        <div className="register-screen">
            <div className="modal modal-signin position-static d-block bg-transparent pt-5 pb-3 text-dark" tabIndex={-1} role="dialog">
                <div className="modal-dialog pt-5" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0"> 
                            <h2 className="fw-bold mb-0">Create one your M-Accounts </h2>
                            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </Button>
                        </div>

                        <div className="modal-body p-5 pt-0">

                        {message && <span>{message}</span>}

                        {error && <span className="error-message">{error}</span>}

                            <Form className="register-screen__form" onSubmit={registerHandler}>

                                <Form.Group className="form-floating mb-3">
                                    <Form.Control 
                                    className="form-control rounded-4"
                                    type="text" 
                                    required 
                                    id="username" 
                                    placeholder="Username"
                                    autoComplete="true" 
                                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    <Form.Label htmlFor="username">Username</Form.Label>
                                </Form.Group>

                                <Form.Group className="form-floating mb-3">
                                    <Form.Control 
                                    type="email" 
                                    required 
                                    id="email"
                                    className="form-control rounded-4"
                                    autoComplete="true"
                                    placeholder="name@example.com"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                </Form.Group>

                                <Form.Group className="form-floating mb-3">
                                    <Form.Control 
                                    type={passwordType} 
                                    required 
                                    id="password"
                                    className="form-control rounded-4" placeholder="Password"
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Form.Label htmlFor="password">Password
                                    </Form.Label>
                                </Form.Group>

                                <Form.Group className="form-floating mb-3">
                                    <Form.Control 
                                    type="password"
                                    required 
                                    id="confirmpassword" 
                                    className="form-control rounded-4" placeholder="Password"
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <Form.Label htmlFor="confirmpassword">Confirm Password</Form.Label>
                                </Form.Group>

                                <div className="text-center mb-3"><Button type="button" className="btn btn-warning" onClick={togglePassword}><span>Show Password</span></Button></div>

                                <button className="w-100 mb-2 btn btn-lg rounded-4 btn-outline-dark" type="submit">Sign up</button>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="By clicking Sign up, you agree to the terms of use." />
                                </Form.Group>
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

                                <span className="register-screen__subtext">Already have an account? <Link className="link" to="/signin">Sign in</Link></span>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RegisterScreeen;