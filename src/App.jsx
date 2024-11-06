import Header from './components/Header'
import LineArt from './components/LineArt'
import Education from './components/Education'
import Personal from './components/Personal'
import Hobby from './components/Hobby'
import DreamJob from './components/DreamJob'
import Languages from './components/Languages'

import './App.css'

function App() {
  return (
      <div className="a4">
        <div className="sidebar">
            <img src="/paramet.jpg" alt="Profile" className="Profile-image" />
            <Personal />
            <Hobby />
            <DreamJob />
            <Languages />
        </div>
        <div className="main">
            <Header />
            <LineArt />
            <Education />
        </div>
      </div>
  );
}

export default App
