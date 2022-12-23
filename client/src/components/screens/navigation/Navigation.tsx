import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DarkMode from '../darkmode/DarkMode';
import Languages from "../../assets/components/LanguageComponent";

import "./Navigation.css";

function NavBar() {
    const { t } = useTranslation("navigation");
        return (
            <nav className='navbar'>
                <ul className="m-3"> 
                    <li className='badge m-1'><NavLink to="/" className={({isActive}) => (
                        isActive ? 'link active' : 'link'
                    )}>
                        {t('home')}</NavLink>
                    </li>
                    <li className='badge rounded-pill m-1'><NavLink to="/profile" className={({isActive}) => (
                        isActive ? 'link active' : 'link'
                    )}>
                        {t('profile')}</NavLink>
                        </li>
                    <li className='link badge rounded-pill m-1'><NavLink className="link" to="/dashboard">{t('dashboard')}</NavLink></li>
                    <li className='badge rounded-pill m-1'><NavLink className="link" to="/about">{t('about')}</NavLink></li>
                    <li className='badge rounded-pill m-1'><NavLink className="link" to="/products">{t('products')}</NavLink></li>
                    <li className='badge rounded-pill m-1'><NavLink className="link" to="/signin">{t('signin')}</NavLink></li>
                    <li className='badge rounded-pill m-1'>
                        <NavLink className="link" to="/signup">{t('signup')}</NavLink>
                    </li>
                </ul>
                
                <span><Languages /></span>
                <span><DarkMode /></span>
            </nav>
        );
    }
export default NavBar;
