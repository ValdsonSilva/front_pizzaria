import React from "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import '../pedidos/PedidoCliente.style.css'
import { useEffect, useState } from "react";
import Gigaphoto from "../../imgs/logop";
import pizza from "../../imgs/pizza.jpg"
import pizzaFrango from "../../imgs/pizza-frango.jpg"
import pizzaPortuguesa from "../../imgs/pizza-portuguesa.jpg"
import coca from "../../imgs/coca.jpg"
import guarana from "../../imgs/guarana.jpg"
import mais from "../../../assets/sinal-de-adicao.svg"
import "react-hook-form"
import { useForm, Controller} from "react-hook-form";
import Select from "react-select"

function TelaPedidoCliente() {

    const [selectedOptionTamanho, setSelectedOptionTamanho] = useState([])

    const {register, handleSubmit, control, reset, watch} = useForm();

    const optionsTamanho = [
        { value: 'familia', label: 'Família' },
        { value: 'grande', label: 'Grande' },
        { value: 'media', label: 'Média' },
        { value: 'pequena', label: 'Pequena' },
    ];

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          width: '136x',
          height: '46px',
          borderRadius: '10px',
          border: state.isFocused ? '1px solid #EA1D2C' : '1px solid #EA1D2C',
          backgroundColor: '#F6F5F5',
          fontSize: '25px',
          display: 'flex',
          alignItems: 'center',
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

    return(
        <>
            <header className="cabecalho_comum_edit">
                <div className="logo"><Gigaphoto/></div>
            </header>
            <h1>Meu Pedido</h1>

            <div className="container_itens">
                <h2 className="subtitle">Pizzas</h2>

                <div className="item">
                    <div>
                        <img className="imgpizza" src={pizzaFrango} alt="logo gigapizza" />
                    </div>
                    <div>
                        <h3 className="titulo">Frango com Catupiry</h3>
                        <p className="descricao">Pizza com queijo mussarela, frango, catupiry e azeitona</p>
                        <h3>À partir de R$ 25,00</h3>
                    </div>
                    <div className="divd">

                        <select name="" className="slc">
                            <option className="opt" value="" disabled selected>Tamanho</option>
                            <option value="">Família</option>
                            <option value="">Grande</option>
                            <option value="">Média</option>
                            <option value="">Pequena</option>
                        </select>
                        <div>
                            <input type="number" className="inputnmb" placeholder="Quant."/>
                        </div>
                        <div className='botao_adicionar'>
                            <img src={mais} alt="" />
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div>
                        <img className="imgpizza" src={pizza} alt="logo gigapizza" />
                    </div>
                    <div>
                        <h3 className="titulo">Calabresa</h3>
                        <p className="descricao">Pizza com queijo mussarela e linguíça calabresa</p>
                        <h3>À partir de R$ 25,00</h3>
                    </div>
                    <div className="divd">

                        <select name="" className="slc">
                            <option className="opt" value="" disabled selected>Tamanho</option>
                            <option value="">Família</option>
                            <option value="">Grande</option>
                            <option value="">Média</option>
                            <option value="">Pequena</option>
                        </select>
                        <div>
                            <input type="number" className="inputnmb" placeholder="Quant."/>
                        </div>
                        <div className='botao_adicionar'>
                            <img src={mais} alt="" />
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div>
                        <img className="imgpizza" src={pizzaPortuguesa} alt="logo gigapizza" />
                    </div>
                    <div>
                        <h3 className="titulo">Portuguesa</h3>
                        <p className="descricao">Pizza com queijo mussarela, azeitona, cebola, presunto e tomate</p>
                        <h3>À partir de R$ 25,00</h3>
                    </div>
                    <div className="divd">

                        <select name="" className="slc">
                            <option className="opt" value="" disabled selected>Tamanho</option>
                            <option value="">Família</option>
                            <option value="">Grande</option>
                            <option value="">Média</option>
                            <option value="">Pequena</option>
                        </select>
                        <div>
                            <input type="number" className="inputnmb" placeholder="Quant."/>
                        </div>
                        <div className='botao_adicionar'>
                            <img src={mais} alt="" />
                        </div>
                    </div>

                </div>

                <h2 className="subtitle">Bebidas</h2>

                <div className="item">
                    <div>
                        <img className="imgpizza" src={coca} alt="logo gigapizza" />
                    </div>
                    <div>
                        <h3 className="titulo">Coca cola 2L</h3>
                        
                        <h3>R$ 10,00</h3>
                    </div>
                    <div className="divd">

                        <div>
                            <input type="number" className="inputnmb" placeholder="Quant."/>
                        </div>
                        <div className='botao_adicionar'>
                            <img src={mais} alt="" />
                        </div>
                    </div>

                </div>

                <div className="item">
                    <div>
                        <img className="imgpizza" src={guarana} alt="logo gigapizza" />
                    </div>
                    <div>
                        <h3 className="titulo">Guaraná Antarctica 2L</h3>
                        
                        <h3>R$ 10,00</h3>
                    </div>
                    <div className="divd">

                        <div>
                            <input type="number" className="inputnmb" placeholder="Quant."/>
                        </div>
                        <div className='botao_adicionar'>
                            <img src={mais} alt="" />
                        </div>
                    </div>

                </div>

            </div>
           
        </>
        
    )
}
export default TelaPedidoCliente;