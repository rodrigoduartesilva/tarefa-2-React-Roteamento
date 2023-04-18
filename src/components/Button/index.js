import React from "react";

const Button = (event) => {
    return (
        <button className="bg-primary px-6 text-white rounded-full transition duration-700 hover-scale-105">{event.children}</button>
    );
}

export default Button;