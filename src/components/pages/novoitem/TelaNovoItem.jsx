import "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../novoitem/TelaNovoItem.style.css'
import BotaoConfirmar from "../../button/BotaoConfirmar";
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import { useState } from "react";
import ItemForm from "../../formulários_item/ItemForm";
import CategoriaForm from "../../formulário_categoria/CategoriaForm";
import SubCategoriaForm from "../../formulário_subcategoria/SubCategoriaForm";

function TelaNovoItem() {

    const [categoria, setCategoria] = useState(false)
    const [item, setItem] = useState(true)
    const [subcategoria, setSubcategoria] = useState(false)

    var estilo
    function distancia() {
        if (item === false){
            estilo = {
                marginBottom : "42px",
            };
        }
    }
    distancia()

    function handleCategoria() {
        setCategoria(true);
        setItem(false);
        setSubcategoria(false);
    }

    function handleItem() {
        setCategoria(false);
        setItem(true);
        setSubcategoria(false);
    }

    function handleSubcategoria() {
        setCategoria(false);
        setItem(false);
        setSubcategoria(true);
    }

    const titulos = {
        categoria_titulo : 'Cadastrando Categoria',
        item_titulo : 'Cadastrando Novo Item',
        subcategoria_titulo : 'Cadastrando Subcategoria'
    }

    var titulo

    if (item) {
        titulo = titulos.item_titulo
    }
    else if (categoria) {
        titulo = titulos.categoria_titulo
    }
    else if (subcategoria){
        titulo = titulos.subcategoria_titulo
    }

    return (
        <div className="father">
            {/* componente reaproveitado */}
            <HeaderComum/> 
            {/* comp reaproveitado */}
            <BotaoVoltar/>
            <div className="container_topo">
                <div className="container_form">

                    <h1>
                        {titulo}
                    </h1>

                    <nav className="nav_listagem_forms">
                        <button className={`categoria ${categoria ? "on" : ""}`}
                        onClick={handleCategoria}>
                            Categoria
                        </button>

                        <button className={`item ${item ? "on" : ""}`}
                        onClick={handleItem}>
                            Item
                        </button>

                        <button className={`subcategoria ${subcategoria ? "on" : ""}`}
                        onClick={handleSubcategoria}>
                            Subcategoria
                        </button>
                    </nav>

                    {/* {item ?  <ItemForm state={''}/> : "Outro Form"} */}
                    {item && (
                        <ItemForm state={""}/>
                    )}
                    {categoria && (
                        <CategoriaForm state={""}/>
                    )}
                    {subcategoria && (
                        <SubCategoriaForm state={""}/>
                    )}


                    <div className="caixa_botao" style={!item ? {marginBottom : '42px'} : {marginBottom : "121px"}} 
                                    onClick={""}>
                                    <BotaoConfirmar/>
                                    </div>
                </div>
           </div>
        </div>
    )
}

export default TelaNovoItem;

