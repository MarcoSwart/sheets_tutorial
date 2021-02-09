import './App.css';
import AuthorizeView from './views/authorise';
import HomePageView from './views/homepage';
import { ClientContext } from "./providers/client";
import { useContext } from 'react';

function App() {
  const { userSignedIn, signIn } = useContext(ClientContext);
  return (
    <div className="m-3">
      <div className="row">
        <h3>Drive API Quickstart (Marco)</h3>
      </div>
      {userSignedIn ?
        <HomePageView />
        :
        <AuthorizeView signIn={signIn} />
      }
    </div>
  );
}

export default App;
