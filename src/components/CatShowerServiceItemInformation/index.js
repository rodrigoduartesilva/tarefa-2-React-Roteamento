import React from "react";
import { useParams } from "react-router-dom";

const CatShowerServiceItemInformation = () => {
    const { id } = useParams();
    console.log('id: ' + id);

    return (
        <h1>Item Information</h1>
    );
}

export default CatShowerServiceItemInformation;