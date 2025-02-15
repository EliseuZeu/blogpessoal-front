import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='w-full flex justify-center py-4 bg-black text-white border-b-2 border-red-700 shadow-lg'>
            
            <div className="container flex justify-between items-center text-lg px-6">
                {/* Nome do Blog */}
                <h1 className="text-2xl font-bold tracking-wide text-red-600 drop-shadow-md">
                    <Link to='/home' className="text-2xl font-bold">Blog Sombrio</Link>
                </h1>

                {/* Links */}
                <nav className='flex gap-6 text-gray-300'>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-105">Postagens</a>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-105">Temas</a>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-105">Cadastrar Tema</a>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-105">Perfil</a>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-105">Sair</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
