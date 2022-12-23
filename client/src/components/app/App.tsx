import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@popperjs/core';
import './App.css';

import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';

// Routing
import ProtectedRoute from "../routes/ProtectedRoute";

// Screen
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import ForgotPasswordScreen from "../screens/forgotpassword/ForgotPasswordScreen";
import ResetPasswordScreen from "../screens/resetpassword/ResetPasswordScreen";
import Stat from "../screens/dashboard/Stat";

// Pages
import SharedLayout from "../pages/SharedLayout/SharedLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import SingleProfile from "../pages/SingleProfile/SingleProfile";
import FourOFour from "../pages/404/404";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" element={ <SharedLayout /> }>
            <Route 
            index 
            element={ <Home /> }
            />
            <Route 
            path="profile" 
            element={ <ProtectedRoute><Profile/></ProtectedRoute> }
            />
            <Route 
            path="profile/:username" 
            element={ <ProtectedRoute><SingleProfile/></ProtectedRoute> }
            />
            <Route 
            path="about" 
            element={ <About/> }
            />
            <Route 
            path="products" 
            element={ <Products/> }
            />
            <Route 
            path="dashboard" 
            element={<ProtectedRoute><DashboardScreen/></ProtectedRoute>}
            >
                <Route 
                path="stat" 
                element={<Stat/>}
                />
            </Route>
            <Route 
            path="signin" 
            element={<LoginScreen />}
            />
            <Route 
            path="signup" 
            element={<RegisterScreen />}
            />
            <Route 
            path="forgotpassword" element={<ForgotPasswordScreen/>}
            />
            <Route 
            path="passwordreset/:resetToken" 
            element={<ResetPasswordScreen />}
            />
            <Route 
            path="*" 
            element={<FourOFour/>}
            />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
