import React from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";

const NavBar = () => {
    return (
        <header className="bg-transparent z-50 w-full">
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                <div className="flex flex-grow items-center">
                    <img src={logo} alt="Logo" className="w-36 cursor-pointer" />
                    <h1 className="text-center text-3xl font-semibold text-gray-700">Carinho Pet</h1>
                </div>
                <div className="flex items-center justify-end space-x-6">
                    <Button>Teste</Button>
                    <Button>Registrar</Button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;