import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RocketContainer from './components/Rockets/RocketContainer';
import MissionsContainer from './components/Missions/MissionsContainer';
import Profile from './components/Profile/myProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RocketContainer />} />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
