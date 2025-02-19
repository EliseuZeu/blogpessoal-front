import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Tema from "../../../models/Tema"
import { AuthContext } from "../../../contexs/AuthContext"
import { buscar, deletar } from "../../../services/Service"

function DeletarTema() {
    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }
    
    return (
        <div className='container w-1/3 mx-auto bg-black text-white min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-center my-4 text-red-500 font-bold drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]'>
                Deletar Tema
            </h1>
            <p className='text-center font-semibold mb-4 text-gray-300'>
                Você tem certeza de que deseja apagar o tema a seguir?
            </p>
            <div className='border border-red-500 flex flex-col rounded-2xl overflow-hidden justify-between bg-gray-900 shadow-lg'>
                <header className='py-2 px-6 bg-red-700 text-white font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-gray-800 h-full text-red-400'>
                    {tema.descricao}
                </p>
                <div className="flex">
                    <button className='text-white bg-gray-700 hover:bg-gray-900 w-full py-2 transition-all duration-300'
                    onClick={retornar}>
                        Não
                    </button>
                    <button className='w-full text-white bg-red-700 
                                       hover:bg-red-900 flex items-center justify-center transition-all duration-300'
                                       onClick={deletarTema}>
                        <span>Sim</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema;
