
import './App.css';
import About from './components/Aboiut';
import Creative from './components/Creative';
import Educations from './components/Educations';
import Home from './components/Home';
import Nav from './components/Nev'
import Work from './components/Work';
import Portfolio from './components/Portfolio';
import Award from './components/Award';
import Blog from './components/Blog';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
  <Nav/>
  <Home/>
  <About/>
  <Creative/>
  <Educations/>
  <Work/>
  <Portfolio/>
  <Award/>
  <Blog/>
  <Contact/>
    </div>
  );
}

export default App;
