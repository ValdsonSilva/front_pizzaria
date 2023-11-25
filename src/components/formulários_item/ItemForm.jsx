import "react";
import '../formulários_item/ItemForm.style.css'
import { useState } from "react";

function ItemForm({state}) {
    const options = ['Opção 1', 'Opção 2', 'Opção 3']
    const [selectedOption, setSelectedOption] = useState('')
    const [showOptions, setShowOptions] = useState(null)

    function handleOptionClick(option){
        setSelectedOption(option)
        setShowOptions(false)
    }

    return (

        <form action={state ? "POST" : ""} >
            <div>
                <span>Nome:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Categoria:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Descrição:</span>
                <textarea rows={4} cols={50} required/>
            </div>
            <div className="select_conteiner">   
                <span>Igredientes:</span>
                <div className="selecao">
                    {/* input simulado */}
                    <div className="select-option" onClick={() => {
                        setShowOptions(!showOptions)
                    }}>
                        {selectedOption ? selectedOption : 'selecione uma opção'}
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
            <div>
                <span>Preço:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Porções:</span>
                <input type="text" required/>
            </div>
        </form>

    )
}

export default ItemForm;
