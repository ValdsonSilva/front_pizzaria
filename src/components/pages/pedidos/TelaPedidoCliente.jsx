import React from "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import '../pedidos/TelaPedidoCliente.style.css'
import { useEffect, useState } from "react";
import Gigaphoto from "../../imgs/logop";
import pizza from "../../imgs/pizza.jpg"
import pizzaFrango from "../../imgs/pizza-frango.jpg"
import pizzaPortuguesa from "../../imgs/pizza-portuguesa.jpg"
import coca from "../../imgs/coca.jpg"
import guarana from "../../imgs/guarana.jpg"
import mais from "../../../assets/sinal-de-adicao.svg"
import "react-hook-form"
import Swal from 'sweetalert2';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { pedidosContext } from "../../../context/pedidoscontext";




function TelaPedidoCliente() {
    
    const [pedido, setPedido] = useState([]);
    const [tamanhoPizza, setTamanhoPizza] = useState();
    const [quantidadePizza , setquantidadePizza] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const {carrinhopedidos, mypizzas} = useContext(pedidosContext)

  const handleAdicionar = (item) => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    item.data = formattedDate
    item.numero = randomNumber
    setPedido((listaitens) => listaitens.concat(item))
    setTotalPrice((precoanterior)=> precoanterior + item.price *item.quantity)
    console.log(pedido)
    console.log(carrinhopedidos.tamanhopedidos)
  };

  const finalpedidos =()=>{

   
    carrinhopedidos.adicionar_pedidos(pedido)
    carrinhopedidos.BuscarPedidos()
    console.log(pedido)
    console.log(carrinhopedidos.allpedidos)
    console.log(mypizzas)
    showSuccessPopup()
    
  }

  const showSuccessPopup = () => {
    Swal.fire({
      
      title: 'Compra Finalizada',
      text: 'Recebemos seu pedido pfv aguarde a entrega :)',
      confirmButtonColor: '#EA1D2C',
      icon: 'success'
    });
  };
    return(
        <>
            {/* <header className="cabecalho_comum_edit">
                <div className="logo"><Gigaphoto/></div>
            </header> */}
            <HeaderComum/>
                        

            <div className="container-pedidos">
                <h1>Meu Pedido</h1>

                    <div className="container_itens">
                        <div>
                            <h2 className="subtitle">Pizzas</h2>
                            <div className="sub"></div>
                        </div>

                        <div className="item-pedidos">
                            <div>
                                <img className="imgpizza" src={pizzaFrango} alt="logo gigapizza" />
                            </div>
                            <div id="idfrangopizza" className="textd">
                                <div>
                                    <h3 className="titulo">Frango com Catupiry</h3>
                                    <p className="descricao">Pizza com queijo mussarela, frango, catupiry e azeitona</p>
                                    <h3>À partir de R$ 25,00</h3>
                                </div>
                            </div>
                            <div className="divd">

                                <select id="optionsfrangopizza" name="" className="slc" onChange={(e) => setTamanhoPizza(e.target.value)}>
                                    <option className="opt" value="" disabled selected>Tamanho</option>
                                    <option value="familia">Família</option>
                                    <option value="grande">Grande</option>
                                    <option value="media">Média</option>
                                    <option value="pequena">Pequena</option>
                                </select>
                                <div>
                                    <input type="number" onChange={(e) => setquantidadePizza(e.target.value)} className="inputnmb" placeholder="Quant."/>
                                </div>
                                <div className='botao_adicionarI' onClick={() =>
                                            handleAdicionar({
                                            item: "Frango com Catupiry",
                                            price: 25.00,
                                            tamanho: tamanhoPizza,
                                            quantity: quantidadePizza,
                                            })
                                        }>
                                    <img src={mais} alt="" />
                                </div>
                            </div>
                        </div>












                        <div className="item-pedidos">
                            <div>
                                <img className="imgpizza" src={pizza} alt="logo gigapizza" />
                            </div>
                            <div>
                                <h3 className="titulo">Calabresa</h3>
                                <p className="descricao">Pizza com queijo mussarela e linguíça calabresa</p>
                                <h3>À partir de R$ 25,00</h3>
                            </div>
                            <div className="divd">

                                <select name="" className="slc" onChange={(e) => setTamanhoPizza(e.target.value)}>
                                    <option className="opt" value="" disabled selected>Tamanho</option>
                                    <option value="familia">Família</option>
                                    <option value="grande">Grande</option>
                                    <option value="media">Média</option>
                                    <option value="pequena">Pequena</option>
                                </select>
                                <div>
                                    <input type="number" className="inputnmb" placeholder="Quant." onChange={(e) => setquantidadePizza(e.target.value)}  />
                                </div>
                                <div className='botao_adicionarI' onClick={() =>
                                            handleAdicionar({
                                            item: "Frango com Calabresa",
                                            price: 25.00,
                                            tamanho: tamanhoPizza,
                                            quantity: quantidadePizza,
                                            })
                                        }>
                                    <img src={mais} alt="" />
                                </div>
                            </div>
                        </div>



                        <div className="item-pedidos">
                            <div>
                                <img className="imgpizza" src={pizzaPortuguesa} alt="logo gigapizza" />
                            </div>
                            <div>
                                <h3 className="titulo">Portuguesa</h3>
                                <p className="descricao">Pizza com queijo mussarela, azeitona, cebola, presunto e tomate</p>
                                <h3>À partir de R$ 25,00</h3>
                            </div>
                            <div className="divd">

                                <select name="" className="slc" onChange={(e) => setTamanhoPizza(e.target.value)}>
                                    <option className="opt" value="" disabled selected>Tamanho</option>
                                    <option value="familia">Família</option>
                                    <option value="grande">Grande</option>
                                    <option value="media">Média</option>
                                    <option value="pequena">Pequena</option>
                                </select>
                                <div>
                                    <input type="number" className="inputnmb" placeholder="Quant." onChange={(e) => setquantidadePizza(e.target.value)}  />
                                </div>
                                <div className='botao_adicionarI' onClick={() =>
                                            handleAdicionar({
                                            item: "Frango portuguesa",
                                            price: 25.00,
                                            tamanho: tamanhoPizza,
                                            quantity: quantidadePizza,
                                            })
                                        }>
                                    <img src={mais} alt="" />
                                </div>
                            </div>

                        </div>

                        <div>
                            <h2 className="subtitle">Bebidas</h2>
                            <div className="sub2"></div>
                        </div>

                        <div className="item-pedidos">
                            <div>
                                <img className="imgpizza" src={coca} alt="logo gigapizza" />
                            </div>
                            <div>
                                <h3 className="titulo">Coca cola 2L</h3>
                                
                                <h3>R$ 10,00</h3>
                            </div>
                            <div className="divd">

                                <div>
                                    <input type="number" className="inputnmb" placeholder="Quant." onChange={(e) => setquantidadePizza(e.target.value)}/>
                                </div>
                                <div className='botao_adicionarI' onClick={() =>
                                            handleAdicionar({
                                            item: "cocacola",
                                            price: 10.00,
                                            quantity: quantidadePizza,
                                            })
                                        }>
                                    <img src={mais} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="item-pedidos">
                            <div>
                                <img className="imgpizza" src={guarana} alt="logo gigapizza" />
                            </div>
                            <div>
                                <h3 className="titulo">Guaraná Antarctica 2L</h3>
                                
                                <h3>R$ 10,00</h3>
                            </div>
                            <div className="divd">

                                <div>
                                    <input type="number" className="inputnmb" placeholder="Quant." onChange={(e) => setquantidadePizza(e.target.value)}/>
                                </div>
                                <div className='botao_adicionarI'onClick={() =>
                                            handleAdicionar({
                                            item: "guarana",
                                            price: 10.00,
                                            quantity: quantidadePizza,
                                            })
                                        }>
                                    <img src={mais} alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
            </div>


            
            <div className="navvalor" >
                <div>
                    <p className="valord">Preço total: <br /> ${totalPrice}</p>
                </div>
                <div><button className="btnvalor" onClick={finalpedidos} >Finalizar compra</button></div>
            </div>
           
        </>
        
    )
}
export default TelaPedidoCliente;