import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema';

interface CardTemasProps {
    tema: Tema
}

function CardTemas({tema}: CardTemasProps) {
    return (
        <div className='border border-red-500 flex flex-col rounded-2xl overflow-hidden justify-between bg-gray-900 shadow-lg'>
            <header className='py-2 px-6 bg-red-700 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-gray-800 text-red-400 h-full'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-white bg-gray-700 hover:bg-gray-900 
                        flex items-center justify-center py-2 transition-all duration-300'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='text-white bg-red-700 hover:bg-red-900 w-full 
                    flex items-center justify-center transition-all duration-300'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardTemas;
