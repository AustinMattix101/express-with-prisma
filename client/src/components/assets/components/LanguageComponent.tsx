import React from 'react';
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import cookies from "js-cookie";
import 'flag-icons/css/flag-icons.min.css';

import { Languages as _Languages} from "../../assets/languages/languages";
import { GlobeIcon } from "../../assets/components/svg";

function Languages() {
    const Languages = _Languages();
    const { t } = useTranslation();
    const currentLanguageCode = cookies.get('i18next') || 'en-US';
    const currentLanguage = Languages.find(e => e.code === currentLanguageCode);
    
    const LanguagesItems = Languages.map(({code, name, country_code}) =>
    <li key={country_code}>
      <button 
      className="dropdown-item" 
      onClick={() => i18next.changeLanguage(code)} 
      disabled={code === currentLanguageCode}
      >
        <span 
        className={`fi fi-${String(country_code).toLowerCase()} mx-2`}
        style={{ opacity: (code === currentLanguageCode) ? 0.5 : 1}}
        ></span>
      {name}
      </button>
    </li>
  );

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  return (
    <React.Fragment>
            <div className="container">
                <div className="d-flex justify-content-end">
                    <div className="dropdown ms-2">
                            
                        <button className="btn btn-link dropdown-toggle" type="button" id="dropupLangButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <GlobeIcon />
                        </button>
                        
                        <ul 
                        className="dropdown-menu dropdown-menu-dark dropdown-menu-macos rounded-3 mx-0 border-0 shadow" aria-labelledby="dropupMenuButton"
                        >
                            <li><span className="dropdown-item-text">{t('language')}</span></li>
                            {LanguagesItems}
                        </ul>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Languages;
