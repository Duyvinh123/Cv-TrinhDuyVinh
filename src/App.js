import { useEffect } from 'react'
import './App.css';
import { keepTheme } from './Components/ChangeColor/SetTheme'
import Toggle from './Components/ChangeColor/ToggleColor'
import './Components/ChangeColor/SetColorTheme.css'
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/Contents/About';
import Contact from './Components/Contents/Contact';
import Project from './Components/Contents/Project';
import {data} from './Components/Contents/data'

function App() {

  useEffect(() => {
    keepTheme();
  })


  return (
    <Router>
      <Toggle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/project'>
          <Project data={data} />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
