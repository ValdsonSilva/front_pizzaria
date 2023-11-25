import "react";
import "./Main.style.css"

function Main({child}) {
    return (
        <main className="conteudo">
            {child}
        </main>
    )
}

export default Main;