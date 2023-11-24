import "react";

function ItemForm({state}) {
    return (

        <form action={state ? "POST" : ""} >
            <div>
                <span>Nome:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Categoria:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Descrição:</span>
                <textarea rows={4} cols={50} required/>
            </div>
            <div>
                <span>Igredientes:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Preço:</span>
                <input type="text" required/>
            </div>
            <div>
                <span>Porções:</span>
                <input type="text" required/>
            </div>
        </form>

    )
}

export default ItemForm;
