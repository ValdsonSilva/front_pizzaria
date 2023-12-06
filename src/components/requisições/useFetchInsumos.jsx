import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function useFetchInsumos() {
    const [insumos, setInsumos] = useState([])
    useEffect(() => {
        const fetchInsumos = async () => {
            try {
                const response = await axios.get("http://localhost:3000/listar/itenscomprados")
                setInsumos(response.data.msg)
            } catch (error) {
                console.error(error.response)
            }
        }
        fetchInsumos()
        console.log("Insumos useEffect:", insumos)
    },[])

    return insumos;
}

export default useFetchInsumos;