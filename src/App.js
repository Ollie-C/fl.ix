//MODULES
import { BrowserRouter, Routes, Route } from "react-router-dom";
//STYLES
import "./styles/global.scss";
//COMPONENTS
import HomePage from "./components/pages/HomePage/HomePage";
import UploadPage from "./components/pages/UploadPage/UploadPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
