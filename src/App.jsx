import './App.css';
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import Portfolio from "./components/Portfolio/Portfolio";
import CV from "./components/CV/CurriculumVitae";
import Contact from "./components/contact/Contact"
import { Route, Routes } from "react-router-dom";


function App() {


    return (
        <>
            <Nav />
            <main className="flex-grow w-full text-center flex items-center justify-around flex-col">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/TechStack" element={<TechStack />} />
                    <Route path="/CV" element={<CV />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>
        </>
    )
}

export default App
