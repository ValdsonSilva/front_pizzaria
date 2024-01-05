import "react";
import './CategoriaForm.style.css'
import { useEffect, useState } from "react";
import "react-hook-form"
import { useForm, Controller} from "react-hook-form";
import Select from "react-select"
import axios from "axios"
import useFetchCategorias from "../../requisições/useFetchCategorias";
import { useAsyncError } from "react-router-dom";


function CategoriaForm(){
    const [selectedOptionTipo, setSelectedOptionTipo] = useState([])
    const [selectedOptionCategoria, setSelectedOptionCategoria] = useState([])
    const {register, handleSubmit, control, reset, watch} = useForm();
    const [mensagem, setMensagem] = useState(null)
    const [carregando, setCarregando] = useState(false)
    // requisição de categorias listadas
    const {categorias} = useFetchCategorias();
    console.log("Importado: ", categorias)

    // opções do campo "tipo" no formulário
    const optionsTipo = [
        { value: 'categoria', label: 'Categoria' },
        { value: 'subcategoria', label: 'Subcategoria' },
    ];


    // lista de categorias
    const categorias_listadas = categorias.filter(cat => cat.is_active === true)
            .map((cat) => ({value : cat.nome_categoria, label : cat.nome_categoria})
    )
    console.log('Categorias listadas: ', categorias_listadas)

    const optionsCategoria = categorias_listadas

    console.log("optionsCategoria: ", optionsCategoria)

    // Adicione os valores padrão para cada campo aqui, se necessário
    const tipo = watch('selecaoTipo', null)
    const categoriaSelecionada = watch("selecaoCategoria", null)

    const onSubmit = async (data) => {

        // cadastrando categoria
        if (tipo.value === "categoria"){
            try {
                setCarregando(true)
                const response = await axios.post(`https://integracao-giga-pizza.vercel.app/cadastrar/categoria`, {
                    nome_categoria : data.nome,
                    id_usuario_requisitante : 2,
                });
                console.log(response.data)
                setMensagem("Formulário enviado com sucesso!")
            }
            catch (error) {
                console.error(error.response.data)
                setMensagem("Erro no envio do formulário!")
            }
        }

        // cadastrando subcategoria
        else if (tipo.value === "subcategoria"){
            console.log("subcategoria endpoint!")
            console.log(data)
            console.log("Categoria escolhida pelo user: ", categoriaSelecionada.value)
            categorias.map(async (cat) => {
                // procurando na minha lista de categorias
                if (cat.nome_categoria === categoriaSelecionada.value){
                    try {
                        setCarregando(true)
                        const response = await axios.post(`https://integracao-giga-pizza.vercel.app/cadastrar/subcategoria`, {
                            id_categoria : cat.id_categoria,
                            nome_subcategoria : data.nome,
                            id_usuario_requisitante : 2,
                        })
                        console.log(response.data)
                        setMensagem("Formulário enviado com sucesso!")
                    } catch (error) {
                        console.error(error)
                        setMensagem("Erro no envio do formulário!")
                    }
                }else {
                    return "Esta categoria não está cadastrada"
                }
            })
        }

        // console.log(data)
        setCarregando(false)
        reset()
        setSelectedOptionCategoria([])
        setSelectedOptionTipo([])
    }

    // controle de exibição da mensagem de retorno do formulário
    useEffect(() => {
        const timer = setTimeout(() => {
            setMensagem(null);
        }, [5000]) // Mensagem desaparece após 5 segundos

        return () => clearTimeout(timer)
    }, [mensagem])

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
            {carregando && <h2>Carregando...</h2>}
            {mensagem && <h2>{mensagem}</h2>}
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

                                // Limpar a seleção de categoria ao mudar o tipo
                                setSelectedOptionCategoria([]);

                                // Se o tipo selecionado for 'Categoria', ativar a seleção de categoria
                                if (item && item.value === 'subcategoria') {
                                    field.onBlur(); // Marcar como tocado para forçar a validação
                                }
                            }}
                            isSearchable
                            required
                            placeholder="Selecione um tipo"
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
                            placeholder="Selecione uma categoria"
                            styles={customStyles}
                            isDisabled={!selectedOptionTipo.value || selectedOptionTipo.value !== 'subcategoria'}
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
