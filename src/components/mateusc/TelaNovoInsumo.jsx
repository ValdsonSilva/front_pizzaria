import React from "react";
import "./TelaNovoInsumo.style.css";
import HeaderComum from "../header/HeaderComum/HeaderComum";
import BotaoVoltar from "../button/Botao_voltar/BotaoVoltar";
import BotaoConfirmar from "../button/BotaoConfirmar"
import { useForm } from "react-hook-form";


function TelaNovaComposicao() {

    const {register, handleSubmit, reset} = useForm()

    function onSubmit(e) {
        console.log(e)

        reset()
    }

    return (
        <div className="container">
            <div className="container-form">
                <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
                    <div>
                        <span>Nome:</span>
                        <input type="text" required {...register("nome")} />
                    </div>
                    <div>
                        <span>Quantidade:</span>
                        <input type="number" required {...register("quantidade")}/>
                    </div>
                    <div>
                        <span>Preço:</span>
                        <input type="number" required {...register("preco")}/>
                    </div>
                    <div>
                        <span>Unidade:</span>
                        <input type="number" required  {...register("unidade")}/>
                    </div>
                    <BotaoConfirmar/>
                </form>
            </div>
            
        </div>
    );
}

export default TelaNovaComposicao;