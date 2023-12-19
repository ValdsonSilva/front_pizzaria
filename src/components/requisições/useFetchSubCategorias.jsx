import axios from "axios";
import { useState, useEffect } from "react";

function useFecthSubcategorias() {
    const [subcategorias, setSubcategorias] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSubCategoria = async () => {
            try {
                const response = await axios.get("http://localhost:3000/listar/subcategorias")
                setSubcategorias(response.data.msg)

            } catch (error) {
                console.error(error.response)
            } finally {
                setLoading(false)
            }
        }
        fetchSubCategoria()
    }, [])
    return {subcategorias, loading}
}

export default useFecthSubcategorias;