import "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../novoitem/TelaNovoItem.style.css'
import BotaoConfirmar from "../../button/BotaoConfirmar";
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import { useState } from "react";

function TelaNovoItem() {

    const [categoria, setCategoria] = useState(false)
    const [item, setItem] = useState(true)
    const [subcategoria, setSubcategoria] = useState(false)

    function handleCategoria() {
        // o botão não muda com state true
        if (categoria === false){
            setCategoria(!categoria)
        }
    }

    function handleItem() {
        // o botão não muda com state true
        if (item === false){
            setItem(!item)
        }
    }

    function handleSubcategoria() {
        // o botão não muda com state true
        if (subcategoria === false) {
            setSubcategoria(!subcategoria)
        }
    }

    return (
        <div className="father">
            {/* componente reaproveitado */}
            <HeaderComum/> 
            {/* comp reaproveitado */}
            <BotaoVoltar/>
            <div className="container_topo">
                <div className="container_form">
                    <h1>Cadastrando Novo Item</h1>

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

                    <form action="POST" >
                        <div>
                            <span>Nome:</span>
                            <input type="text" required/>
                        </div>
                        <div>
                            <span>Categoria:</span>
                            <input type="text" required/>
                        </div>
                        <div>
                            <span>Descrição</span>
                            <input type="text" required/>
                        </div>
                        <div>
                            <span>Igredientes:</span>
                            <input type="text" required/>
                        </div>
                        <div>
                            <span>Preço:</span>
                            <input type="text" required/>
                        </div>
                        <div>
                            <span>Porções:</span>
                            <input type="text" required/>
                        </div>
                    </form>
                    <div className="caixa_botao" onClick={""}><BotaoConfirmar/></div>
                </div>
           </div>
        </div>
    )
}

export default TelaNovoItem;

