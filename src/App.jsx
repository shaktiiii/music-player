import "./App.css";
import Authentication from "./pages/authentication/Authentication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import NewPlaylist from "./pages/playlist/Addnewplaylist";
import PlaylistDetails from "./pages/playlist/PlaylistDetails";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/Newplaylist" element={<NewPlaylist/>} />
          <Route path="/playlist-details" element={<PlaylistDetails/>} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
