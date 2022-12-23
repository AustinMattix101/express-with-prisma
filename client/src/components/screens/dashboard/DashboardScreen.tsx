import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, Outlet } from "react-router-dom";



import Game from '../games/Game';

const DashboardScreen = ({ history }:any) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {

      if (!localStorage.getItem("authToken")) {
        history.push("/login");
      }

      const fetchPrivateData = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        }

        try {
            const {data} = await axios.get("/api/private", config);
            setPrivateData(data.data);
        } catch (error) {
            localStorage.removeItem("authToken");
            setError("You are not authorized please login!");
        }
      }

      fetchPrivateData();

    }, [history]);
    
    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("login");
    }

  return error ? ( <span className="error-message">{error}</span>
  ) : (

      <div className="App">
          <header className="App-header">
              <p className='text-uppercase agis-bold mt-2'>Mattix<br/>
                <code className='text-lowercase'>mattix.com</code>
              </p>
              <a
              className="App-link mb-4 text-decoration-none"
              href="https://camunited.000webhostapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to previous version@1.0
            </a>
            <Game />
            <Link to="/dashboard/stat">Stat</Link>
            <section className="section">
              <Outlet />
            </section>
        </header>
    
          <div style={{background: "green", color: "white"}}> {privateData}</div>
            <button onClick={logoutHandler}>Logout</button> 
    </div>
    );
}


export default DashboardScreen;