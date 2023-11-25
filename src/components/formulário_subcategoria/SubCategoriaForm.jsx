import "react";
import '../formulário_subcategoria/SubCategoriaForm.style.css'
import { useState } from "react";

function SubCategoriaForm(){
    const options = ['Categoria 1', 'Categoria 2', 'Categoria 3']
    const [selectedOption, setSelectedOption] = useState('')
    const [showOptions, setShowOptions] = useState(null)

    function handleOptionClick(option){
        setSelectedOption(option)
        setShowOptions(false)
    }

    return (

        <form action="" >
            <div>
                <span>Nome:</span>
                <input type="text" required/>
            </div>
            <div className="select_conteiner">   
                <span>Categoria:</span>
                <div className="selecao">
                    {/* input simulado */}
                    <div className="select-option" onClick={() => {
                        setShowOptions(!showOptions)
                    }}>
                        {selectedOption ? selectedOption : 'selecione uma categoria'}
                    </div>

                    {/* listagem de opções */}
                    {showOptions && (
                        <div className="options">
                            {options.map((option, key) => (
                                <div>
                                    <div className="itens" key={key} onClick={() => handleOptionClick(option)}>
                                        {option}
                                    </div>
                                    <div className="listinha"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </form>

    )
}

export default SubCategoriaForm;