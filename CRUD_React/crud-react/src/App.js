import './App.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/Adduser';
import EditUser from './users/Edituser';
import ViewUser from './users/Viewuser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:id" element={<EditUser />} />
        <Route exact path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
