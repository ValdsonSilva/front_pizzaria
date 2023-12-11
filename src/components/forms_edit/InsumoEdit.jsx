import React, { useEffect, useState } from "react";
import HeaderComum from "../header/HeaderComum/HeaderComum"
// import Insumo from "../ItensCadastrados/Insumo/Insumo"
import "../forms_edit/InsumoEdit.style.css"
// import {BotaoVoltar} from "../button/Botao_voltar"
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import BotaoConfirmar from "../button/BotaoConfirmar";
import logo from "../../assets/gigapizza_logo.svg"


function InsumoEdit() {

    const {insumoId} = useParams()

    // fazer requisição do insumo específico
    // código

    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = async (data) => {
        // console.log(data)

        try {
            setCarregando(true)
            console.log(`Insumo de id ${insumoId} editado com sucesso!`)
            console.log(data)
            setMensagem("Formulário enviado com sucesso!")
        } 
        catch (error) {
            console.error("Erro no envio do Insumo editado!")
            setMensagem("Erro no envio do formulário!")
        }
        finally {
            setCarregando(false)
            reset()
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setMensagem(null);
        }, 5000) // Mensagem desaparece após 5 segundos

        return () => clearTimeout(timer);
    }, [mensagem])


    return (
        <>  
            <header className="cabecalho_comum_edit">
                <img src={logo} alt="logo gigapizza" className="logo_edit"/>
            </header>

            <h1 className="editando-insumo">Editando Insumo</h1>
            <div className="container_edit">
                {carregando && <h2 className="mensagens-edit">Carregando...</h2>}
                {mensagem && <h2 className="mensagens-edit">{mensagem}</h2>}
                <div className="container-form-edit">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="form-edit">
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
        </>
    )
}

export default InsumoEdit;