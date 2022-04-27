import { Link } from "react-router-dom";

import './index.scss'

export default function Index() {

    return (
        <div className="pagina-home">
            <h1 className='titulo'> Home </h1>

            <h3> Seja bem-vindo!</h3>

            <Link to='/contato'> Ver Contatos</Link>

        </div>
    )
}