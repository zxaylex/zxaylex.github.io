
import { useState } from 'react'
import './App.css'
import Tab from './components/Tab';

function App() {
  const [links, setLinks] = useState(0);
  const [about, setAbout] = useState(0);
  const [professional, setProfessional] = useState(0);
  const [team, setTeam] = useState(0);
  const [contact, setContact] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <div className="browser-container">
      <div className="tab-container">
        <Tab name='Home'/>
      </div>
        <p className='title-name'>Hi! I am <strong>Zach David</strong></p>
        <p className='title-intro'>Your friendly software developer and enthusiast.</p>
      </div>
      <div className="tab-selection">
        
      </div>
    </>
  )
}

export default App
