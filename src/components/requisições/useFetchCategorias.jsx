import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function useFetchCategorias() {
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(true)

     // Acessando as categorias cadastradas no sistema
     useEffect(() => {
        // função responsável pelo get de categorias
        const fectchCategoria = async () => {
            try {
                const response = await axios.get("https://integracao-giga-pizza.vercel.app/listar/categorias")
                setCategorias(response.data.msg)
            } catch (error) {
                console.error(error.response)
            } finally {
                setLoading(false)
            }
        }
        fectchCategoria();
        console.log('Dentro do useEffect:')
        console.log(categorias)
    },[]) // Executando apenas na montagem do componente
    
    return {categorias, loading}
}

export default useFetchCategorias;