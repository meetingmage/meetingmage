import React from "react";
import { Router } from "@reach/router";
import { FirebaseAppProvider } from "reactfire";
import "firebase/performance";

import logo from "./logo.svg";

import Home from "./pages/Home";
import Meeting from "./pages/Meeting";

const firebaseConfig = {
  apiKey: "AIzaSyA8o0ZR9OrrTvn9BjJDOA0DnsfYYsaeR2w",
  authDomain: "meeting-mage.firebaseapp.com",
  databaseURL: "https://meeting-mage.firebaseio.com",
  projectId: "meeting-mage",
  storageBucket: "meeting-mage.appspot.com",
  messagingSenderId: "492019532262",
  appId: "1:492019532262:web:9c59c1961061f38c515627",
  measurementId: "G-5K2YB2XBT3"
};

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
      <div>
        <header>
          <div className="container mx-auto flex items-center py-2">
            <img src={logo} alt="logo" width="25" className="mr-3" />
            <h1>Meeting Mage</h1>
          </div>
        </header>
        <main className="container mx-auto">
          <Router>
            <Home path="/" default />
            <Meeting path="/meet/:url_slug" />
          </Router>
        </main>
      </div>
    </FirebaseAppProvider>
  );
};

export default App;
