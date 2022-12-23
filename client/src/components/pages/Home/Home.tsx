import * as React from 'react';
import { useTranslation } from "react-i18next";

// import Alert from 'react-bootstrap/Alert';

import AlertDismissible from "../../assets/components/AlertDismissible";

function Home() {
  const { t } = useTranslation();
  function dateTest(date:Date):void{
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    console.log("Current Time: "+hours+":"+minutes+":"+seconds); 
  }
  var date=new Date();
  dateTest(date);

  const releaseDate:Date = new Date('2022-10-18');
  const timeDifference = new Date().getDate() - releaseDate.getDate();
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <React.Fragment>
      {/* <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
      </Alert> */}

      <AlertDismissible />

      <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="d-flex flex-column align-item-start">
            <h2 className="font-weight-normal mb-3">{t('welcome_to_mattix')}</h2>
            <p>{t('days_since_release', { number_of_days })}</p>
          </div>
        </div>
      </header>
      </div>
    </React.Fragment>
  )
}

export default Home;
