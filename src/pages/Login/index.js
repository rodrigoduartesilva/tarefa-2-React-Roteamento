import React from "react";
import Button from "../../components/Button"
import InputSpace from "../../components/InputSpace";
import InputPass from "../../components/InputPass";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center w-96 h-96 mt-1 border border-orange-400 rounded-xl m-auto">
            <h1 className="text-3xl text-gray-700">Realize seu Login</h1>
            <InputSpace>Usuário</InputSpace>
            <InputPass>Senha</InputPass>
            <Button>Login</Button>
        </div>
    );
}

export default Login;