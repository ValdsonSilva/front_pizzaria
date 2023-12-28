import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select"
import axios from "axios";
import logo from "../../../assets/gigapizza_logo.svg"
import "../forms_edit/SubcategoriaEdit.style.css"
import useFetchCategorias from "../../requisições/useFetchCategorias";


function SubcategoriaEdit(){

    const {categorias} = useFetchCategorias();
    console.log("Importado: ", categorias)

    const {SubcategoriaId} = useParams()
    const navigate = useNavigate()
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)

    const [fetchData, setFetchData] = useState([])
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([])
    const {register, handleSubmit, control, reset, watch, setValue} = useForm();

    const categorias_listadas = categorias.filter(cat => cat.is_active === true)
            .map((cat) => ({value : cat.id_categoria, label : cat.nome_categoria})
    )
    console.log('Categorias listadas: ', categorias_listadas)
    const optionsCategoria = categorias_listadas

    const categoria_edicao = categorias.filter(cat => cat.id_categoria === fetchData.id_categoria)
            .map((cat) => ({value : cat.id_categoria, label : cat.nome_categoria})
    )
    console.log('Categoria edição: ', categoria_edicao[0] ? categoria_edicao[0].value : null)


    // const categoriaSelecionada = watch("selecaoCategoria", null)

    // if (categoriaSelecionada && categoriaSelecionada.value !== null) {
    //     // A categoriaSelecionada não é nula e sua propriedade 'value' não é nula
    //     console.log('Valor selecionado:', categoriaSelecionada.value);
    // } else {
    //     // categoriaSelecionada é nula ou sua propriedade 'value' é nula
    //     console.log('Seleção nula');
    // }

    useEffect(() => {
        const useFetchSubcategoriaEdit = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/listar/subcategoria/${SubcategoriaId}`)
                const fetchSubcategoriaData = response.data.msg
        
                // Acessa todos os campos do meu Json
                Object.keys(fetchSubcategoriaData).forEach((key) => {
                    setValue(key, fetchSubcategoriaData[key])
                })
                console.log("Retorno do insumo especifico: ", fetchSubcategoriaData)
                setFetchData(fetchSubcategoriaData)
            }
            catch (error){
                console.log("Erro ao obter insumo específico: ", error)
            }
        }
        useFetchSubcategoriaEdit()
    }, [])

    const onSubmit = async (data) => {
        // console.log(data)
        try {
            setCarregando(true)
            console.log(`Subcategoria de id ${SubcategoriaId} editada com sucesso!`)
            console.log('categoria id da edição: ', categoria_edicao[0].value)
            const response = await axios.post("http://localhost:3000/editar/subcategoria", {
                id_subcategoria : SubcategoriaId,
                id_categoria : categoria_edicao[0].value,
                nome_subcategoria : data.nome_subcategoria,
                id_usuario_requisitante : 2,
            })
            console.log(response.data.msg)
            setMensagem("Subcategoria editado com sucesso!")
            navigate("/cadastrados")
        } 
        catch (error) {
            console.log(error)
            console.error("Erro no envio da Subcategoria editado!")
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


    return(
        <>
            <header className="cabecalho_comum_edit">
                <img src={logo} alt="logo gigapizza" className="logo_edit"/>
            </header>
            <h1>Editando Subcategoria</h1>
            {carregando && <h2 className="mensagens-edit">Enviando...</h2>}
            {mensagem && <h2 className="mensagens-edit">{mensagem}</h2>}
            <form onSubmit={handleSubmit(onSubmit)} className="form_categoria" >
                <div>
                    <span>Nome:</span>
                    <input type="text"  {...register("nome_subcategoria")} required/>
                </div>
                
                <div className="btns">
                    <button type="submit" className="botao_enviar_categoria">Confirmar</button>
                    <Link to="/cadastrados" className="voltar_edit">Cancelar</Link>
                </div>
            </form>
        </>
        
    )
}
export default SubcategoriaEdit;