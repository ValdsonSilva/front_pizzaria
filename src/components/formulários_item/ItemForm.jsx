import "react";
import '../formulários_item/ItemForm.style.css'
import { useState } from "react";
import seta from "../../assets/seta.svg"
import "react-hook-form"
import { useForm, Controller} from "react-hook-form";
import Select from "react-select"
import useFetchCategorias from "../requisições/useFetchCategorias";

function ItemForm() {
    const categorias = useFetchCategorias();

    const options = [
        { value: 'categoria', label: 'Categoria' },
        { value: 'subcategoria', label: 'Subcategoria' },
    ];

    const categorias_listadas = categorias.filter(cat => cat.is_active === true)
            .map((cat) => ({value : cat.nome_categoria, label : cat.nome_categoria})
    )

    const [selectedOption, setSelectedOption] = useState([])
    const {register, handleSubmit, control, reset} = useForm();

    const onSubmit = (e) => {
        console.log(e)
        reset();
        setSelectedOption([]);
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

        <form onSubmit={handleSubmit(onSubmit)} className="formiItem">
            <div>
                <span>Nome:</span>
                <input type="text" required {...register("nome")}/>
            </div>
            <div>
                <span>Preço:</span>
                <input type="number" required {...register("categoria")}/>
            </div>
            <div>
                <span>Descrição:</span>
                <textarea rows={4} cols={50} required {...register("decricao")}/>
            </div>
            <div className="select_conteiner">   
                <span>Categoria:</span>
                <div className="selecao">
                    {/* input simulado */}
                    <Controller
                        name="selecao" // Nome do campo no formulário
                        control={control}
                        render={({ field }) => (
                        <Select
                            {...field}
                            options={categorias_listadas}
                            value={selectedOption}
                            onChange={(item) => {
                            setSelectedOption(item);
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
            <button type="submit" className="botao_enviar">Confirmar</button>
        </form>

    )
}

export default ItemForm;
