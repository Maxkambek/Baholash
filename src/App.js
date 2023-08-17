// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./styles/navbar.scss";
import "./styles/header.css";
import "./styles/asistance.css";
import "./styles/worklist.css";
import "./styles/objectives.css";
import "./styles/footer.css";
import "./styles/map.css";
import "./styles/certificates.css";
import Header from "./components/header/Header";
import Asistance from "./components/asistance/Asistance";
import Worklist from "./components/worklist/Worklist";
import Objectives from "./components/objectives/Objectives";
import Footer from "./components/footer/Footer";
import Map from "./components/map/Map";
import Certificates from "./components/certificates/Certificates";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detail/:pk" element={<ServiceDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
