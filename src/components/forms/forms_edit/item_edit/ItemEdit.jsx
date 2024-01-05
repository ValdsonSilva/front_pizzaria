import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import logo from "../../../../assets/gigapizza_logo.svg"

function ItemEdit() {
    // id do item específico que é passado pela url
    const {itemId} = useParams()
    console.log('Aqui está o id: ', itemId)
    // hook da biblioteca react-router-dom
    const navigate = useNavigate()
    const {setValue, register, handleSubmit, reset} = useForm()
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)
    // id do admin padrão
    const id_usuario_requisitante = 2
    const [objeto, setObjeto] = useState([])

    // busca do json/dados do meu item específico
    useEffect(() => {
        // função de CallBack para chamada à API
        const useFetchItemEdit = async () => {
            try {
                const response = await axios.get(`https://integracao-giga-pizza.vercel.app/listar/itemvendido/${itemId}`)
                const fetchItemData = response.data.msg
                setObjeto(response)
                // acessando os campos do json que será retornado
                Object.keys(fetchItemData).forEach((key) => {
                    setValue(key, fetchItemData[key])
                })

                // console.log("Retorno do item específico: ", fetchItemData)
                console.table(fetchItemData)
            }
            catch (error) {
                console.error("Erro ao obter item específico: ", error.response.data)
            }
        }
        // chamada da função que faz a requisição à API
        useFetchItemEdit()
    }, [])  // executa a chamada somente vez devido ao array de dependências vazio

    const onSubmit = async (data) => {
        try {
            setCarregando(true)
            const response = await axios.post('https://integracao-giga-pizza.vercel.app/editar/itemvenda', {
                id_item_venda: itemId,
                nome_item_venda: data.nome_item_venda,
                descricao_item_venda: data.descricao_item_venda,
                preco_item_venda: data.preco_item_venda,
                id_usuario_requisitante : id_usuario_requisitante
            })
            console.log(response.data)
            setMensagem("Item editado com sucesso!")
            navigate("/cadastrados")
        }
        catch (error) {
            console.error("Erro no envio do Item editado!", error)
            setMensagem("Erro no envio do formulário!")
        }
        finally {
            setCarregando(false)
            reset()
        }
    }

    // exibe a mensagem por um tempo de 5 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setMensagem(null);
        }, 5000) // Mensagem desaparece após 5 segundos

        return () => clearTimeout(timer);
    }, [mensagem])

    return (
        // <h1>Tela de edição do item específico!!!</h1>
        <>      
            <header className="cabecalho_comum_edit">
                <img src={logo} alt="logo gigapizza" className="logo_edit"/>
            </header>
            <h1>Editando Item</h1>
            {carregando && <h2 className="mensagens-edit">Enviando...</h2>}
            {mensagem && <h2 className="mensagens-edit">{mensagem}</h2>}
            <form onSubmit={handleSubmit(onSubmit)} className="formiItemEdit">
                <div>
                    <span>Nome:</span>
                    <input type="text" required {...register("nome_item_venda")}/>
                </div>
                <div>
                    <span>Preço:</span>
                    <input type="text" required pattern="^[0-9]+([.][0-9]{1,2})?$" {...register("preco_item_venda")}/>
                </div>
                <div>
                    <span>Descrição:</span>
                    <textarea rows={4} cols={50} required {...register("descricao_item_venda")}/>
                </div>
                <div className="select_conteiner">   
                    {/* <span>Categoria:</span> */}
                    <div className="selecao">
                        {/* input simulado */}
                        {/* <Controller
                            name="selecao" // Nome do campo no formulário
                            control={control}
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={sub_categorias_listadas}
                                value={selectedOption}
                                onChange={(item) => {
                                setSelectedOption(item);
                                field.onChange(item);
                                }}
                                isSearchable
                                required
                                placeholder="Selecione uma categoria"
                                styles={customStyles}
                                >
                                    {""}
                                </Select>
                                )}
                            /> */}
                    </div>
                </div>
                <button type="submit" className="botao_enviar">Confirmar</button>
                <Link to="/cadastrados" className="voltar_edit">Cancelar</Link>
            </form>
        </>
    )
}

export default ItemEdit