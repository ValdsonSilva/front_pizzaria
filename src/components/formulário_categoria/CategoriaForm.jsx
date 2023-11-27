import "react";
import '../formulário_categoria/CategoriaForm.style.css'
import { useState } from "react";

function CategoriaForm({state}){
    return (

        <form action="" className="form_categoria" >
            <div>
                <span>Nome:</span>
                <input type="text" required/>
            </div>
        </form>
    )

}

export default CategoriaForm;