import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexs/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate();

    const {usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode;

    if(usuario.token !== ""){

        component = (
            <div className='w-full flex justify-center py-4 bg-black text-white border-b-2 border-red-700 shadow-lg'>
            
            <div className="container flex justify-between items-center text-lg px-6">
                {/* Nome do Blog */}
                <h1 className="text-2xl font-bold tracking-wide text-red-600 drop-shadow-md">
                    <Link to='/home' className="text-2xl font-bold">Blog Death Star</Link>
                </h1>

                {/* Links */}
                <nav className='flex gap-6 text-gray-300'>
                    <Link to='/postagens' className="hover:text-red-600 transition-all duration-300 hover:scale-105">Postagens</Link>
                    <Link to='/temas' className="hover:text-red-600 transition-all duration-300 hover:scale-105">Temas</Link>
                    <Link to='/cadastrartema' className="hover:text-red-600 transition-all duration-300 hover:scale-105">Cadastrar Tema</Link>
                    <Link to='/perfil' className="hover:text-red-600 transition-all duration-300 hover:scale-105">Perfil</Link>
                    <Link to='' onClick={logout} className="hover:text-red-600 transition-all duration-300 hover:scale-105">Sair</Link>
                </nav>
            </div>
            </div>
        )
    }

    return (
        <>
        {component}
        </>
    )
}

export default Navbar;
