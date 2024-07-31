import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavSm() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Tech stack", path: "/TechStack" },
        { name: "Curriculum Vitae", path: "/CV" },
        { name: "Portfolio", path: "/Portfolio" },
        { name: "Contact", path: "/Contact" }
    ];

    const handleMenuItemClick = () => {
        setIsMenuOpen(false); // Cierra el menú cuando se selecciona un enlace
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="sm:hidden bg-black text-white"
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link to="/" id="techStack" className="font-bold text-inherit">rdavid1986</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarMenu className="bg-black">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            to={item.path}
                            className="block text-customGray m-2"
                            onClick={handleMenuItemClick} // Cierra el menú al hacer clic en el enlace
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
