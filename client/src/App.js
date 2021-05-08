import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Nav/Navigation';
import Check from './components/Check';
import SearchPatient from './components/SearchPatient';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Check} />
        {/* oke */}
        <Route path='/search' component={SearchPatient} />
        {/* oke */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
