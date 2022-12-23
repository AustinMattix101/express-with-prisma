import React from 'react';
import logo from '../../assets/logo/logo.svg'
import '../../app/App.css';

function loadingMarkup() {
  return (
    <div className="py-4 text-center">
      <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App">Loading...</h2>
    </div>
  )
}

export default loadingMarkup