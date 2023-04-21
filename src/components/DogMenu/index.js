import React from "react";
import DogShowerServiceItem from "../DogShowerServiceItem";
import DogGroomingServiceItem from "../GodGroomingServiceItem";
import DogVetServiceItem from "../DogVetServiceItem";

const DogMenu = () => {
    return (
        <>
            <DogShowerServiceItem />
            <DogGroomingServiceItem />
            <DogVetServiceItem />
        </>
    );
}

export default DogMenu;