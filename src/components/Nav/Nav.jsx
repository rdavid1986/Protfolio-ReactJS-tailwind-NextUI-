/* eslint-disable eol-last */
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function nav() {
    return (
        <>
            <Navbar shouldHideOnScroll className="bg-black">
                <NavbarBrand>
                    <Link to="/" className="text-[30px] opacity hover:text-blue-600 transition duration-900 text-mygray font-bold">rdavid1986.</Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link to="/" color="foreground" id="index" className="opacity hover:text-blue-600 transition duration-900 text-mygray font-bold"> Home </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/techStack" id="techStack" className="opacity hover:text-blue-600 transition duration-900 text-mygray font-bold"> Tech stack</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link to="/CV" id="CV" className="opacity hover:text-blue-600 transition duration-900 text-mygray font-bold">Curriculum Vitae</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <Link to="/portfolio" id="portfolio" className="opacity hover:text-blue-600 transition duration-900 text-mygray font-bold">Portfolio</Link>
                    <NavbarItem>
                        <Link to="/contact" id="contact" className="text-mygray opacity hover:text-blue-600 transition duration-900 font-bold">Contact</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}