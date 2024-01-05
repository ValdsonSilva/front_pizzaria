import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../tables/Insumo/Insumo.style.css'
import useFetchInsumos from "../../requisições/useFetchInsumos";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TelaInsumo() {
    const { insumos, loading, setInsumos } = useFetchInsumos();
    let navigate = useNavigate()

    console.log("Insumos cadastrados: ", insumos)

    // função de ativar ou desativar insumo
    async function desativarInsumo(id_item) {
      try {
        // Atualize o estado local para indicar que a requisição está em andamento
        // (se você precisar de um indicador de carregamento)

        const insumo_selecionado = insumos.find((insumo) => insumo.id_item_comprado === id_item);

        // desativar insumo
        if (insumo_selecionado.is_active === true) {
          console.log(`O insumo com ${id_item} foi encontrado na filtragem com id ${insumo_selecionado.id_item_comprado}`);
          console.log(`O insumo de ${id_item} foi encontrado e está ${insumo_selecionado.is_active === true ? "ativo" : "inativo"}`);

          const response = await axios.post("https://integracao-giga-pizza.vercel.app/inativar/compra", {
            id_item_comprado: insumo_selecionado.id_item_comprado,
          });

          console.log(response.data.msg);

          setInsumos((prevInsumos) =>
            prevInsumos.map((insumo) =>
              insumo.id_item_comprado === id_item ? { ...insumo, is_active: false } : insumo
            )
          );

          // para atualizar obrigatoriamente a tela
          window.location.reload()
          // setShouldReload(true)
        }
        // ativar insumo
        else {
          console.log('Insumo ativado');
          console.log(`O insumo de id ${id_item} foi encontrado e está ${insumo_selecionado.is_active === true ? "ativo" : "inativo"}`);
          // lógica para ativar o insumo, se necessário

          const response = await axios.post("https://integracao-giga-pizza.vercel.app/ativar/compra", {
              id_item_comprado: insumo_selecionado.id_item_comprado,
          })

          console.log(response.data)

          setInsumos((prevInsumos) =>
              prevInsumos.map((insumo) => 
                  insumo.id_item_comprado === id_item ? {...insumo, is_active: true} : insumo
              )
          )

          // para atualizar obrigatoriamente a tela
          window.location.reload()
          // setShouldReload(true)
        }
      } catch (error) {
        console.error("Erro na requisição: ", error.response ? error.response.data : error.message);
      }
    }

    const encryptFunction = (id) => {
      // Lógica de criptografia aqui (exemplo simples: inversão)
      return id.split('').reverse().join('');
  };

  return (
    <div className="father">
      <div className="container_topo">
        <div className="container_lista">
          <div className="pesquisar_insumo">
            <div className="input-pesquisar">
              <input type="text" placeholder="Pesquisar..."></input>
            </div>
            <div className="iconBox">
              <i className="icone_pesquisar">
                <BiSearchAlt />
              </i>
            </div>
          </div>

          {loading ? (
            <h1>Carregando...</h1>
          ) : (
            <table className="tabela_insumo">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {insumos.map((insumo) => (
                  <tr key={insumo.id_item_comprado}>
                    <td className={insumo.is_active ? "" : "inativado"}>{insumo.nome_item_comprado}</td>
                    <td className={insumo.is_active ? "" : "inativado"}>{insumo.preco_item_comprado}</td>
                    <td className={insumo.is_active ? "" : "inativado"}>{insumo.quantidade_item_comprado}</td>
                    <td className={insumo.is_active ? "" : "inativado"}>
                      <Link className="icones_insumo" to={`/editarinsumo/${insumo.id_item_comprado}`}>
                      {/* <Link className="icones_insumo" to={`/editarinsumo/`}> */}
                        <BiEditAlt />
                      </Link>

                      <a className={`icones_insumo_acao ${insumo.is_active ? "on" : ""}`} onClick={() => desativarInsumo(insumo.id_item_comprado)}>
                        {insumo.is_active ? "off" : "on"}
                      </a>
                      {/* <a className="icones_insumo" onClick={handleSetState}><BiTrash/></a> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
export default TelaInsumo;
