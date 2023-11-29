import "react";
import '../formulário_categoria/CategoriaForm.style.css'
import { useState } from "react";
import "react-hook-form"
import { useForm, Controller} from "react-hook-form";
import Select from "react-select"

function CategoriaForm(){
    const optionsTipo = [
        { value: 'opcao1', label: 'Tipo 1' },
        { value: 'opcao2', label: 'Tipo 2' },
        { value: 'opcao3', label: 'Tipo 3' },
    ];
    
    const optionsCategoria = [
        { value: 'opcao1', label: 'Categoria 1' },
        { value: 'opcao2', label: 'Categoria 2' },
        { value: 'opcao3', label: 'Categoria 3' },
    ];

    const [selectedOptionTipo, setSelectedOptionTipo] = useState([])
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([])
    const {register, handleSubmit, control} = useForm();

    const onSubmit = (e) => {
        console.log(e)
    }

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
        }),
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form_categoria" >
            <div className="select_conteiner">   
                <span>Tipo:</span>
                <div className="selecao">
                    {/* input simulado */}
                    <Controller
                        name="selecaoTipo" // Nome do campo no formulário
                        control={control}
                        render={({ field }) => (
                        <Select
                            {...field}
                            options={optionsTipo}
                            value={selectedOptionTipo}
                            onChange={(item) => {
                            setSelectedOptionTipo(item);
                            field.onChange(item);
                            }}
                            isSearchable
                            required
                            placeholder="Selecione uma opção"
                            styles={customStyles}
                        />
                    )}
                    />
                </div>
            </div>
            <div>
                <span>Nome:</span>
                <input type="text"  {...register("nome")} required/>
            </div>
            <div className="select_conteiner">   
                <span>Categoria:</span>
                <div className="selecao">
                    {/* input simulado */}
                    <Controller
                        name="selecaoCategoria" // Nome do campo no formulário
                        control={control}
                        render={({ field }) => (
                        <Select
                            {...field}
                            options={optionsCategoria}
                            value={selectedOptionCategoria}
                            onChange={(item) => {
                            setSelectedOptionCategoria(item);
                            field.onChange(item);
                            }}
                            isSearchable
                            required
                            placeholder="Selecione uma opção"
                            styles={customStyles}
                        />
                    )}
                    />
                </div>
            </div>
            <button type="submit" className="botao_enviar">Enviar</button>
        </form>
    )
}

export default CategoriaForm;
