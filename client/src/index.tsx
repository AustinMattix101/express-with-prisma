import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./utils/i18next/i18next";
import reportWebVitals from './utils/webvital/reportWebVitals';
import loadingMarkup from "./components/assets/components/loadingMarkup";

import './index.css';
import App from './components/app/App'; // Put App in lastest declaration to power it over css apply rules

const loading = loadingMarkup();

function GetApp() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <Suspense fallback={loading}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
    
  );
}

GetApp();

reportWebVitals(console.log);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals