import "react";
import '../formulários_item/ItemForm.style.css'
import { useState } from "react";
import seta from "../../assets/seta.svg"
import "react-hook-form"
import { useForm } from "react-hook-form";
import OpcoesAutoComplete from "./Autocomplete/OpcoesAutocomplete";

function ItemForm() {

    const options = ['Opção 1', 'Opção 2', 'Opção 3']
    const [selectedOption, setSelectedOption] = useState(null)
    const [showOptions, setShowOptions] = useState(null)
    const {register, handleSubmit, setValue} = useForm();

    function handleOptionClick(option){
        setSelectedOption(option)
        setValue("selecao", selectedOption)
        setShowOptions(false)
        console.log(selectedOption)
    }

   

    const onSubmit = (e) => {
        console.log(e)
    }

    // onSubmit={state && handleSubmit(onSubmit)}
    {/* <div className="select-option" required 
                    {...register("selecao", {value: selectedOption})} onClick={() => {
                        setShowOptions(!showOptions)
                    }}>
                        {selectedOption ? selectedOption : 'selecione uma opção'}
                        <img src={seta} style={!showOptions ? {display : 'block'} : {display : 'none'}} className="seta" alt="seta na caixa de opções"/>
    </div> */}

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <span>Nome:</span>
                <input type="text" required {...register("nome")}/>
            </div>
            <div>
                <span>Categoria:</span>
                <input type="text" required {...register("categoria")}/>
            </div>
            <div>
                <span>Descrição:</span>
                <textarea rows={4} cols={50} required {...register("decricao")}/>
            </div>
            <div className="select_conteiner">   
                <span>Igredientes:</span>
                <div className="selecao">
                    {/* input simulado */}
                    <OpcoesAutoComplete  options={options}  onSelectOption={handleOptionClick} />

                    {/* listagem de opções */}
                    {showOptions && (
                        <div className="options">
                            {options.map((option, key) => (
                                <div key={key}>
                                    <div className="itens" onClick={() => handleOptionClick(option)}>
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
                <input type="text" required {...register("preco")}/>
            </div>
            <div>
                <span>Porções:</span>
                <input type="text" required {...register("porcoes")}/>
            </div>
            <button type="submit" className="botao_enviar">Enviar</button>
        </form>

    )
}

export default ItemForm;
