import React, { useEffect, useState } from "react";
// import Insumo from "../ItensCadastrados/Insumo/Insumo"
import "./InsumoEdit.style.css"
// import {BotaoVoltar} from "../button/Botao_voltar"
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import BotaoConfirmar from "../../button/BotaoConfirmar";
import logo from "../../../assets/gigapizza_logo.svg"
import axios from "axios";
import Select from "react-select"



function InsumoEdit() {
    // Novo hook - useParams()
    const {insumoId} = useParams()
    // Novo hook - useHistory()
    const navigate = useNavigate()
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const {register, handleSubmit, reset, setValue, control, watch} = useForm()
    // id do usuário admin padrão
    const id_usuario_requisitante = 2
    // opções do campo de unidade
    const optionsTipo = [
        { value: 'ml', label: 'ml' },
        { value: 'l', label: 'l' },
        { value : "mg", label : "mg"},
        { value : "Kg", label : "Kg"},
        { value : "und", label : "und"}
    ];

    // Fazer requisição do insumo específico usando a rota obterItemComprado(id:id) - Ok
    useEffect(() => {
        const useFetchInsumoEdit = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/listar/itemcomprado/${insumoId}`)
                const fetchInsumoData = response.data.msg

                // Acessa todos os campos do meu Json
                Object.keys(fetchInsumoData).forEach((key) => {
                    setValue(key, fetchInsumoData[key])
                })
                console.log("Retorno do insumo especifico: ", fetchInsumoData)
            }
            catch (error){
                console.log("Erro ao obter insumo específico: ", error)
            }
        }
        useFetchInsumoEdit()
    }, [])

    // unidade selecionada no formulário
    const unidade_selecionada = watch("unidade_item_comprado", null)
    // para podermos exibir a unidade pré-selecionada
    const unidade_selecionada_object = {
        value : unidade_selecionada, label : unidade_selecionada
    }
    console.log("Unidade pré-selecionada: ", unidade_selecionada_object)

    // estado da caixa de selção
    const [selectedOptionTipo, setSelectedOptionTipo] = useState([unidade_selecionada_object])

    // Distribuir o retorno do Jsom em cada input específico - Ok

    // Enviar novamente o insumo editado usando a rota editarItemComprado
    const onSubmit = async (data) => {

        // edição do insumo específico
        try {
            setCarregando(true)
            console.log(`Insumo de id ${insumoId} editado com sucesso!`)
            const response = await axios.post("http://localhost:3000/editar/itemcomprado", {
                id_item_comprado : insumoId,
                nome_item_comprado : data.nome_item_comprado,
                preco_item_comprado : data.preco_item_comprado,
                quantidade_item_comprado : data.quantidade_item_comprado,
                unidade_item_comprado : unidade_selecionada.value,
                id_usuario_requisitante : id_usuario_requisitante
            })
            console.log(response.data)
            setMensagem("Insumo editado com sucesso!")
            navigate("/cadastrados")
        } 
        catch (error) {
            console.log(error)
            console.error("Erro no envio do Insumo editado!")
            setMensagem("Erro no envio do formulário!")
        }
        finally {
            setCarregando(false)
            reset()
            selectedOptionTipo([])
        }
    }

    // exibe a mensagem por um tempo de 5 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setMensagem(null);
        }, 5000) // Mensagem desaparece após 5 segundos

        return () => clearTimeout(timer);
    }, [mensagem])

    // estilo do input de seleção
    const customStyles = {
        control: (provided, state) => ({
        ...provided,
        width: '385px',
        height: '70px',
        borderRadius: '10px',
        border: state.isFocused ? '1px solid #EA1D2C' : '1px solid #EA1D2C',
        backgroundColor: '#F6F5F5',
        fontSize: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#808080',
        }),
        singleValue: (provided) => ({
        ...provided,
        color: '#808080',
        }),
        input: (provided) => ({
        ...provided,
        color: '#000',
        zIndex: '2',
        }),
    };

    return (
        <>  
            <header className="cabecalho_comum_edit">
                <img src={logo} alt="logo gigapizza" className="logo_edit"/>
            </header>

            <h1 className="editando-insumo">Editando Insumo</h1>
            <div className="container_edit">
                {carregando && <h2 className="mensagens-edit">Enviando...</h2>}
                {mensagem && <h2 className="mensagens-edit">{mensagem}</h2>}
                <div className="container-form-edit">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-edit">
                        <div>
                            <span>Nome:</span>
                            <input type="text" required {...register("nome_item_comprado")}/>
                        </div>
                        <div>
                            <span>Quantidade:</span>
                            <input type="number" required {...register("quantidade_item_comprado")}/>
                        </div>
                        <div>
                            <span>Preço:</span>
                            <input type="text" required {...register("preco_item_comprado")}/>
                        </div>
                        <div>
                            <span>Unidade:</span>
                            {/* <input type="text" required  {...register("unidade_item_comprado")}/> */}
                            <Controller
                                name="unidade_item_comprado" // Nome do campo no formulário
                                control={control}
                                // defaultValue={unidade_selecionada_object}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={optionsTipo}
                                        value={selectedOptionTipo}
                                        // value={unidade_selecionada}
                                        onChange={(item) => {
                                            // atualiza o estado durante a seleção
                                            setSelectedOptionTipo(item);
                                            field.onChange(item);
                                        }}
                                        isSearchable
                                        isCreatable
                                        // required
                                        placeholder="Selecione uma unidade"
                                        styles={customStyles}
                                    />
                                )}
                            />
                        </div>
                        <BotaoConfirmar/>
                        <Link to="/cadastrados" className="voltar_edit">Cancelar</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InsumoEdit;

// -------------- OBSERVAÇÃO ------------------

// Object.keys(fetchInsumoData).forEach((key) => {
//     setValue(key, fetchInsumoData[key])
// })

// Para usar esta estrutura do setValue do hook useForm(), devemos colocar no {...register('nome_campo_json')}
// o nome do campo do json que quero que seja exibido/renderizado naquele input especifico