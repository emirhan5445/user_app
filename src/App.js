import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import UserLists from './Components/UserLists';
import User from './Components/User';

function App() {
  return (
    <>
      <Router>
          <NavBar />
          
        <Routes>

          <Route path='/' exact element={<UserLists />} />

          <Route path='/user/:userId' element={<User />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;