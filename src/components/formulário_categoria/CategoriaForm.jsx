import "react";
import '../formulário_categoria/CategoriaForm.style.css'
import { useEffect, useState } from "react";
import "react-hook-form"
import { useForm, Controller} from "react-hook-form";
import Select from "react-select"
import axios from "axios"


function CategoriaForm(){
    const [selectedOptionTipo, setSelectedOptionTipo] = useState([])
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([])
    const {register, handleSubmit, control, reset, watch} = useForm();
    const [categorias, setCategorias] = useState([])

    const optionsTipo = [
        { value: 'categoria', label: 'Categoria' },
        { value: 'subcategoria', label: 'Subcategoria' },
    ];

    // Acessando as categorias cadastradas no sistema
    useEffect(() => {
        // função responsável pelo get de categorias
        const fectchCategoria = async () => {
            try {
                const response = await axios.get("http://localhost:3000/listar/categorias'")
                setCategorias(response.data.msg)
                console.log(response.data)
                console.log('Foooii')
                
            } catch (error) {
                console.error(error.response.data)
            }
        }
        fectchCategoria();
        console.log("Aqui rapaz: ", categorias)
    },[]) // Executando apenas na montagem do componente

    const optionsCategoria = [
        { value: 'opcao1', label: 'Categoria 1' },
        { value: 'opcao2', label: 'Categoria 2' },
        { value: 'opcao3', label: 'Categoria 3' },
    ];

    // Adicione os valores padrão para cada campo aqui, se necessário
    const tipo = watch('selecaoTipo', null)
    const categoriaSelecionada = watch("selecaoCategoria", null)

    const onSubmit = async (data) => {

        if (tipo.value === "categoria"){
            try {
                const response = await axios.post(`http://localhost:3000/cadastrar/categoria`, {
                    nome_categoria : data.nome
                });
                console.log(response.data)
        }
            catch (error) {
                console.error(error.response.data)
            }
        }

        else if (tipo.value === "subcategoria"){
            console.log("subcategoria endpoint!")
            try {

                
            } catch (error) {
                console.log(error.response.value)
            }
        }

        // console.log(data)
        reset()
        setSelectedOptionCategoria([])
        setSelectedOptionTipo([])
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
          zIndex: '2',
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
                        >
                            {""}   
                        </Select>
                    )}
                    />
                </div>
            </div>
            <button type="submit" className="botao_enviar_categoria">Confirmar</button>
        </form>
    )
}

export default CategoriaForm;
