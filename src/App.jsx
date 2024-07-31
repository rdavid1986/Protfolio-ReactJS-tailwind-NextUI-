import './App.css';
import Nav from "./components/Nav/Nav";
import NavSm from "./components/Nav/NavSm";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import Portfolio from "./components/Portfolio/Portfolio";
import Cv from "./components/CV/CurriculumVitae";
import Contact from "./components/contact/Contact"
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
            <NavSm />
            <Nav />
            <main className="flex items-center h-full pb-20 sm:flex flex-col gap-5 ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/TechStack" element={<TechStack />} />
                    <Route path="/CV" element={<Cv />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>
        </>
    )
}

export default App
