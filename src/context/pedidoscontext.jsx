
//obejot maginario pois nao sei onde estão todos os dados para montar o peido

    //esse contexto funciona apenas para mostrar o pedido caso seja necessario a criaçao de um contexto
    //para a formulçao de um pedido adicionar funçao diretamente aqui
    import { createContext, useRef } from "react";
    //criaçao do contexto de pedido
    export const pedidosContext = createContext();
    
export const PedidoProvider = ({ children }) => {
      //varaiveis de referencia 
      //lembrete nao usar use state re-recompopnentizaçao 
      const mypizzas = useRef([])
      const pedidosFilePath = "./pedidosdb.json";

      class Carinho {
        constructor() {
          this.allpedidos = [];
          this.tamanhopedidos = 0;
      
          // Verifica se há pedidos no localStorage e inicializa se necessário
          if (!localStorage.getItem('pedidosobj')) {
            localStorage.setItem('pedidosobj', JSON.stringify([]));
          }
        }
      
        adicionar_pedidos(item) {
          item.forEach(element => {
            // Adiciona ao array da classe
            this.allpedidos.push(element);
      
            // Lê do localStorage, converte para array, adiciona o novo elemento e salva novamente
            const objetoSalvo = JSON.parse(localStorage.getItem('pedidosobj'));
            objetoSalvo.push(element);
            localStorage.setItem('pedidosobj', JSON.stringify(objetoSalvo));
          });
      
          console.log(this.allpedidos);
        }
      
        BuscarPedidos() {
          try {
            // Lê do localStorage
            const response = JSON.parse(localStorage.getItem('pedidosobj'));
      
            // Atribuição de valores
            console.log('All = ', response);
            this.allpedidos = response;
            this.tamanhopedidos = response.length;
          } catch (error) {
            // Captura de erro
            console.log('Erro ao listar pedidos ', error);
          }
        }
      
      }
      
      const carrinhopedidos = new Carinho();
      
      return (
        //passanddo o componente para as rotas
        //enviando valores alteraveis do contexto
        <pedidosContext.Provider value={{ carrinhopedidos, mypizzas }}>
          {children}
        </pedidosContext.Provider>
      );
    };