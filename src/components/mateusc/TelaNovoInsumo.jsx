import React, { useEffect, useState } from "react";
import "./TelaNovoInsumo.style.css";
import BotaoConfirmar from "../button/BotaoConfirmar"
import { useForm } from "react-hook-form";
import axios from "axios";


function TelaNovaComposicao() {
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = async (data) => {
        // console.log(data)

        try {
            setCarregando(true)
            const response = await axios.post(`http://localhost:3000/cadastrar/itemcomprado`, {
                nome_item_comprado: data.nome,
                preco_item_comprado: data.preco,
                quantidade_item_comprado: data.quantidade,
                unidade_item_comprado: data.unidade
            })
            console.log(response.data)
            setMensagem("Formulário enviado com sucesso!")
        } 
        catch (error) {
            console.error(error)
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
        <div className="container">
            {carregando && <h2>Carregando...</h2>}
            {mensagem && <h2>{mensagem}</h2>}
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