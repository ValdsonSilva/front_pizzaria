import React, { useEffect, useState } from "react";
import "./TelaNovoInsumo.style.css";
import BotaoConfirmar from "../../button/BotaoConfirmar"
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import axios from "axios";


function TelaNovaComposicao() {
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const {register, handleSubmit, reset, control, watch} = useForm()
    const [selectedOptionTipo, setSelectedOptionTipo] = useState([])
    // id do super usuário Admin padrão
    const id_usuario_requisitante = 2

    // opções do campo de unidade
    const optionsTipo = [
        { value: 'ml', label: 'ml' },
        { value: 'l', label: 'l' },
        { value : "mg", label : "mg"},
        { value : "Kg", label : "Kg"},
        { value : "und", label : "und"}
    ];

    // unidade selecionada no formulário
    const unidade_selecionada = watch("unidade", null)
    console.log("Unidade selecionada: ", unidade_selecionada)

    const onSubmit = async (data) => {
        // criação/cadastro do insumo/item comprado
        try {
            setCarregando(true)
            const response = await axios.post(`http://localhost:3000/cadastrar/itemcomprado`, {
                nome_item_comprado: data.nome,
                preco_item_comprado: data.preco,
                quantidade_item_comprado: data.quantidade,
                unidade_item_comprado: unidade_selecionada.value,
                id_usuario_requisitante : id_usuario_requisitante
            })
            console.log(response.data.msg)
            console.log(data)
            setMensagem("Formulário enviado com sucesso!")
        } 
        catch (error) {
            console.error(error)
            setMensagem("Erro no envio do formulário!")
        }
        finally {
            setCarregando(false)
            reset()
            setSelectedOptionTipo([])
        }
    }

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
        <div className="container">
            {carregando && <h2>Carregando...</h2>}
            {mensagem && <h2>{mensagem}</h2>}
            <div className="container-form">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
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
                        {/* <input type="number" required  {...register("unidade")}/> */}
                        {/* input simulado */}
                        <Controller
                            name="unidade" // Nome do campo no formulário
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={optionsTipo}
                                    value={selectedOptionTipo}
                                    onChange={(item) => {
                                        // atualiza o estado durante a seleção
                                        setSelectedOptionTipo(item);
                                        field.onChange(item);
                                    }}
                                    isSearchable
                                    isCreatable
                                    required
                                    placeholder="Selecione uma unidade"
                                    styles={customStyles}
                                />
                            )}
                        />
                    </div>
                    <BotaoConfirmar/>
                </form>
            </div>
            
        </div>
    );
}

export default TelaNovaComposicao;