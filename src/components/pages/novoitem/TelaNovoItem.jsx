import "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../novoitem/TelaNovoItem.style.css'
import BotaoConfirmar from "../../button/BotaoConfirmar";
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import { useState } from "react";
import ItemForm from "../../forms/formulários_item/ItemForm"
import CategoriaForm from "../../forms/formulário_categoria/CategoriaForm";
import TelaNovoInsumo from "../../forms/formulário_insumo/TelaNovoInsumo";


function TelaNovoItem() {

    const [categoria, setCategoria] = useState(false)
    const [item, setItem] = useState(true)
    const [insumo, setInsumo] = useState(false)
    const [botaoState, setBotaoState] = useState(false)

    function handleCategoria() {
        setCategoria(true);
        setItem(false);
        setInsumo(false);
    }

    function handleItem() {
        setCategoria(false);
        setItem(true);
        setInsumo(false);
    }

    function handleInsumo() {
        setCategoria(false);
        setItem(false);
        setInsumo(true);
    }

    function handleBotaoState() {
        // SetBotaoState(!botaoState)
        setBotaoState(prevState => !prevState);
    }
    console.log(botaoState)

    const titulos = {
        categoria_titulo : 'Cadastrando Categoria',
        item_titulo : 'Cadastrando Novo Item',
        insumo_titulo : 'Cadastrando Insumo'
    }

    var titulo

    if (item) {
        titulo = titulos.item_titulo
    }
    else if (categoria) {
        titulo = titulos.categoria_titulo
    }
    else if (insumo){
        titulo = titulos.insumo_titulo
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

                        <button className={`item ${item ? "on" : ""}`}
                        onClick={handleItem}>
                            Item
                        </button>

                        <button className={`categoria ${categoria ? "on" : ""}`}
                        onClick={handleCategoria}>
                            Categoria
                        </button>

                        <button className={`subcategoria ${insumo ? "on" : ""}`}
                        onClick={handleInsumo}>
                            Insumo
                        </button>
                    </nav>

                    {/* {item ?  <ItemForm state={''}/> : "Outro Form"} */}
                    {item && (
                        <ItemForm state={botaoState}/>
                    )}
                    {categoria && (
                        <CategoriaForm/>
                    )}
                    {insumo && (
                        <TelaNovoInsumo />
                    )}


                    {/* <div className="caixa_botao" style={!item ? {marginBottom : '42px'} : {marginBottom : "121px"}}>
                                    <BotaoConfirmar funcao={handleBotaoState}/>
                    </div> */}
                </div>
           </div>
        </div>
    )
}

export default TelaNovoItem;

