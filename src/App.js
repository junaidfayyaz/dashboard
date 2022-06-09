
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Sidebar from "./Components/Sidebar/Sidebar"
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Userlist from './Pages/Userlist/Userlist';
function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="use" element={<Userlist />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
