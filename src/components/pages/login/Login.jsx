'use client';
import React from "react";
import HeaderComum from "../../header/HeaderComum/HeaderComum";
import "../login/Login.style.css"
import cadeado from "../../../assets/cadeado.svg"
import utilizador from "../../../assets/utilizador.svg"
import homem from "../../../assets/homem 1.svg"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
    // hook useForm
    const {watch, handleSubmit, register, reset} = useForm()
    // hook useNavigate
    const navigate = useNavigate()

    // função de envio do form
    const onSubmi = (data) => {
        // dados dos campos do formulário
        const {login, senha} = data

        if (login === "adm" && senha === "1"){
            // Adm sendo logado
            console.log("Redirecionando para tela de ADM!")
            navigate("/telainicial")
        }
        else if (login === "cliente" && senha === "2"){
            // cliente sendo logado
            console.log('Redirecionando para tela do cliente!')
            navigate("/meuspedidos")
        }
        else {
            window.alert('Credenciais inválidas ou inexistentes!')
        }

        // limpa os campos do formulário
        reset()
    }

    return (
        <>
            <HeaderComum/>
            <div className="containerLogin">
                <div className="caixaLogin">
                    {/* imagem */}
                    <div className="imagemHome">
                        <img src={homem} alt="Imagem em desenho animado de um 
                        homem com uma pizza vestido nas cores da logo da plataforma" />
                    </div>
                    {/* formulário de login */}
                    <div className="formLogin">
                        <div className="LoginFormTitle">
                            <h2 className="LoginH2">Login</h2>
                            <h3 className="LoginH3">Faça o login para continuar</h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmi)} className="LoginForm">
                            <div className="containerSenha">
                                <input type="text" placeholder="Login" required className="Login" {...register("login")}/>
                                <img src={utilizador} alt="" className="icon-utilizador"/>
                            </div>

                            <div className="containerSenha"> 
                                <input type="text" placeholder="Senha" required className="Senha" {...register("senha")}/>
                                <img src={cadeado} alt=""  className="icon-cadeado"/>
                            </div>

                            <button type="submit" className="ButtonLogin" >Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login