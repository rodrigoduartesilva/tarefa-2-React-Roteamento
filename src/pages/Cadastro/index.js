import React from "react";
import Button from "../../components/Button"
import InputSpace from "../../components/InputSpace";

const Cadastro = () => {
    return (
        <>
            <div className="flex items-start justify-center w-7/12 m-auto">
                <div className="flex flex-col items-center justify-center w-96 h-96 mt-1 border border-orange-400 rounded-xl m-auto">
                    <h1 className="text-3xl text-gray-700">Cadastro Tutor</h1>
                    <InputSpace>Nome</InputSpace>
                    <InputSpace>Telefone</InputSpace>
                    <InputSpace>Endereço</InputSpace>
                </div>
                <div className="flex flex-col items-center justify-center w-96 h-96 mt-1 border border-orange-400 rounded-xl m-auto">
                    <h1 className="text-3xl text-gray-700">Cadastro Pet</h1>
                    <InputSpace>Tipo de Pet</InputSpace>
                    <InputSpace>Nome do seu pet</InputSpace>
                    <InputSpace>Idade do seu Pet</InputSpace>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-4 m-auto">
                <Button>Cadastrar</Button>
            </div>
        </>
    );
}

export default Cadastro;