import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./ResetPasswordScreen.css";

const ResetPasswordScreeen = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { resetToken } = useParams();
    

    async function resetPasswordHandler(e: any) {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Password do not match!");
        }

        try {
            const { data } = await axios.put(
                `/api/auth/resetpassword/${resetToken}`,{ password:password }
                ,
                config);

            console.log(data);
            setSuccess(data.data);
        } catch (error: any) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

    return(
        <div className="resetpassword-screen">
            <form onSubmit={resetPasswordHandler} className="resetpassword-screen__form">
                <h3 className="resetpassword-screen__title">Reset Password</h3>
                {error && <span className="error-message">{error}</span>}
                {success && (<span className="success-message">{success} <Link to="/signin"></Link> </span>)}

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    required 
                    id="password" 
                    placeholder="Enter your password"
                    autoComplete="true" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input 
                    type="password" 
                    required 
                    id="confirmpassword" 
                    placeholder="Confirm your password"
                    autoComplete="true" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Reset Password</button>

                <span className="resetpassword-screen__subtext">Already set? Please login here. <Link to="/login">Login</Link></span>

            </form>
        </div>
    );
    
}

export default ResetPasswordScreeen;