import axios from "axios";
import { useState, useEffect } from "react";

function useFetchItem() {
    const [itens, setItens] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get("https://integracao-giga-pizza.vercel.app/listar/itensvendidos")
                setItens(response.data.msg)
            }
            catch (error) {
                console.log("Erro ao carregar itens: ", error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchItem()
        console.log("Itens no useEffect: ", itens)
    }, []) // sempre passar o array de dependências

    return {itens, loading, setItens}
}

export default useFetchItem;