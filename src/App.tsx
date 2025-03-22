import Aboutme from "./pages/aboutme/Aboutme";
import Artwork from "./pages/artwork/Artwork";
import Gallery from "./pages/gallery/Gallery";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Contactus from "./pages/contactus/Contactus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/artwork" element={<Artwork />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contactus" element={<Contactus/>}/>
    </Routes>
  );
}

export default App;
