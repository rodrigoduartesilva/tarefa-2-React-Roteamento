import React, { useState } from "react";
import ServiceItem from "../ServiceItem";

const ServiceList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Gato');

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-3">
            <div className="flex items-center justify-center space-x-6">
                <p id="categoria-selection" className={categoriaTab === 'Gato' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaTab('Gato')}>Gato</p>
                <p id="categoria-selection" className={categoriaTab === 'Cachorro' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaTab('Cachorro')}>Cachorro</p>
                <p id="categoria-selection" className={categoriaTab === 'Raros' ? 'active-menu-tab bg-primary' : 'menu-tab'} onClick={() => setCategoriaTab('Raros')}>Raros</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </div>
        </section>
    );
}

export default ServiceList;