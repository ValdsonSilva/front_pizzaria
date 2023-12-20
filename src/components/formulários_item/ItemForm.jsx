import "react";
import '../formulários_item/ItemForm.style.css'
import { useEffect, useState } from "react";
import seta from "../../assets/seta.svg"
import "react-hook-form"
import { useForm, Controller} from "react-hook-form";
import Select from "react-select"
import axios from "axios";
import useFetchSubCategorias from "../requisições/useFetchSubCategorias"

function ItemForm() {
    const {subcategorias} = useFetchSubCategorias()
    // const {categorias} = useFetchCategorias();
    const [mensagem, setMensagem] = useState("")
    const [carregando, setCarregando] = useState("")

    // const categorias_listadas = categorias.filter(cat => cat.is_active === true)
    //         .map((cat) => ({value : cat.nome_categoria, label : cat.nome_categoria})
    // )

    const sub_categorias_listadas = subcategorias.filter(sub => sub.is_active === true)
                                    .map((sub) => ({value : sub.nome_subcategoria, label : sub.nome_subcategoria}))

    console.log("Subcategorias: ",subcategorias)

    //console.log("Categorias listadas: ", categorias_listadas)

    const [selectedOption, setSelectedOption] = useState([])
    const {register, handleSubmit, control, reset, watch, formState : {errors}} = useForm();

    // pegando subcategoria da caixa de seleção
    const SubcategoriaSelecionada = watch("selecao", null)

    // filtrando objeto da subcategoria específica
    const subcategoria = async function () {
        if (SubcategoriaSelecionada) {
            const id_subcategoria_selecionada = subcategorias.filter(sub => sub.nome_subcategoria === SubcategoriaSelecionada.value)
                                            .map(sub => sub.id_subcategoria)
            return id_subcategoria_selecionada
        }
    }

    // id da subcategoria selecionado
    let useFetchId = subcategoria

    // Envio/post dos dados do formulário
    const onSubmit = async (data) => {
        // const id = await useFetchId()
        // console.log("dados do formulário: ", data)
        // console.log("SubCategoria selecionada: ", id[0])
        try{
            setCarregando("Carregando...")

            const idSubCategoriaSelecionada = await useFetchId();
            const response = await axios.post("http://localhost:3000/cadastrar/itemvenda", {
                nome_item_venda  : data.nome,
                descricao_item_venda  : data.decricao,
                preco_item_venda  : data.preco,
                id_subcategoria : idSubCategoriaSelecionada[0]
            })
            console.log(response.data.msg)

            setMensagem("Formulário enviado!")
        }
        catch (error) {
            console.error("Erro no envio do formulário: ", error.response.data);
            setMensagem("Erro no envio do formulário!")
        }
        finally {
            setCarregando("")
            reset();
            setSelectedOption([]);
        }
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

    useEffect(() => {
        if (mensagem) {
            const timeOutId = setTimeout(() => {
                setMensagem('')
            }, 5000)

            // Cleanup da função de timeout se o componente for desmontado antes do tempo limite
            return () => clearTimeout(timeOutId)
        }
    }, [mensagem])

    return (
        <>  
            {mensagem && <h1>{mensagem}</h1>}
            {carregando && <h1>{carregando}</h1>}
            <form onSubmit={handleSubmit(onSubmit)} className="formiItem">
                <div>
                    <span>Nome:</span>
                    <input type="text" required {...register("nome")}/>
                </div>
                <div>
                    <span>Preço:</span>
                    <input type="text" required {...register("preco")}/>
                </div>
                <div>
                    <span>Descrição:</span>
                    <textarea rows={4} cols={50} required {...register("decricao")}/>
                </div>
                <div className="select_conteiner">   
                    <span>Subcategoria:</span>
                    <div className="selecao">
                        {/* input simulado */}
                        <Controller
                            name="selecao" // Nome do campo no formulário
                            control={control}
                            render={({ field }) => (
                            <Select
                                {...field}
                                options={sub_categorias_listadas}
                                value={selectedOption}
                                onChange={(item) => {
                                setSelectedOption(item);
                                field.onChange(item);
                                }}
                                isSearchable
                                required
                                placeholder="Selecione uma categoria"
                                styles={customStyles}
                                >
                                    {""}
                                </Select>
                                )}
                            />
                    </div>
                </div>
                <button type="submit" className="botao_enviar">Confirmar</button>
            </form>
        </>
    )
}

export default ItemForm;
