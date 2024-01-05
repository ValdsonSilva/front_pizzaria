import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import logo from "../../../../assets/gigapizza_logo.svg";
import "../../forms_edit/SubcategoriaEdit.style.css";
import useFetchCategorias from "../../../requisições/useFetchCategorias";

function CategoriaEdit() {
    const { categorias } = useFetchCategorias();
    const { categoriaId } = useParams();
    const navigate = useNavigate();
    const [mensagem, setMensagem] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const [fetchData, setFetchData] = useState([]);
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([]);
    const { register, handleSubmit, control, reset, watch, setValue } = useForm();

    const categorias_listadas = categorias
        .filter((cat) => cat.is_active === true)
        .map((cat) => ({ value: cat.id_categoria, label: cat.nome_categoria }));

    const optionsCategoria = categorias_listadas;

    const categoria_edicao = categorias
        .filter((cat) => cat.id_categoria === fetchData.id_categoria)
        .map((cat) => ({ value: cat.id_categoria, label: cat.nome_categoria }));

    useEffect(() => {
        const useFetchCategoriaEdit = async () => {
            try {
                const response = await axios.get(`https://integracao-giga-pizza.vercel.app/listar/categoria/${categoriaId}`);
                const fetchCategoriaData = response.data.msg;

                Object.keys(fetchCategoriaData).forEach((key) => {
                    setValue(key, fetchCategoriaData[key]);
                });

                setFetchData(fetchCategoriaData);
            } catch (error) {
                console.log("Erro ao obter categoria específica: ", error);
            }
        };
        useFetchCategoriaEdit();
    }, []);

    const onSubmit = async (data) => {
        try {
            setCarregando(true);
            const response = await axios.post("https://integracao-giga-pizza.vercel.app/editar/categoria", {
                id_categoria: categoriaId,
                nome_categoria: data.nome_categoria,
                id_usuario_requisitante: 2,
            });

            console.log(response.data.msg);
            setMensagem("Categoria editada com sucesso!");
            navigate("/cadastrados");
        } catch (error) {
            console.error("Erro no envio da categoria editada!");
            setMensagem("Erro no envio do formulário!");
        } finally {
            setCarregando(false);
            reset();
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setMensagem(null);
        }, 5000);

        return () => clearTimeout(timer);
    }, [mensagem]);

    return (
        <>
            <header className="cabecalho_comum_edit">
                <img src={logo} alt="logo gigapizza" className="logo_edit" />
            </header>
            <h1>Editando Categoria</h1>
            {carregando && <h2 className="mensagens-edit">Enviando...</h2>}
            {mensagem && <h2 className="mensagens-edit">{mensagem}</h2>}
            <form onSubmit={handleSubmit(onSubmit)} className="form_categoria">
                <div>
                    <span>Nome:</span>
                    <input type="text" {...register("nome_categoria")} required />
                </div>

                <div className="btns">
                    <button type="submit" className="botao_enviar_categoria">
                        Confirmar
                    </button>
                    <Link to="/cadastrados" className="voltar_edit">
                        Cancelar
                    </Link>
                </div>
            </form>
        </>
    );
}

export default CategoriaEdit;
