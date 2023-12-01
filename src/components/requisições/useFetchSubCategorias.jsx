import axios from "axios";
import { useState, useEffect } from "react";

function useFecthSubcategorias() {
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(() => {
        const fetchSubCategoria = async () => {
            try {
                const response = await axios.get("http://localhost:3000/listar/subcategorias")
                setSubcategorias(response.data.msg)

            } catch (error) {
                console.error(error.response)
            }
        }
        fetchSubCategoria()
    }, [])
    return subcategorias
}

export default useFecthSubcategorias;