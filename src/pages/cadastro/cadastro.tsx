import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function Cadastro() {
    
  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const[confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      }catch(error){
        alert('Erro ao cadastrar o usuário!')
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-black text-white">
        {/* Coluna Esquerda - Imagem */}
        <div className="hidden lg:flex w-full h-full">
          <img
            src="https://ik.imagekit.io/sdkyquy76/Blogpessoal/DALL_E%202025-02-17%2009.15.49%20-%20A%20mysterious%20outer%20space%20scene%20with%20a%20glowing%20red%20nebula,%20distant%20stars,%20and%20a%20dark%20cosmic%20atmosphere.%20The%20nebula%20swirls%20with%20deep%20crimson%20and%20black%20h.webp?updatedAt=1739794613431"
            alt="Imagem Espacial"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coluna Direita - Formulário */}
        <div className="flex justify-center items-center w-full h-full bg-gray-900 p-10 rounded-lg shadow-lg">
        <form className="flex justify-center items-center flex-col w-2/3 gap-3" onSubmit={cadastrarNovoUsuario}>
        
            <h2 className="text-red-500 text-5xl">Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome" className="text-gray-300">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-red-500 bg-black text-white rounded p-2"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario" className="text-gray-300">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="border-2 border-red-500 bg-black text-white rounded p-2"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto" className="text-gray-300">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2 border-red-500 bg-black text-white rounded p-2"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha" className="text-gray-300">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-red-500 bg-black text-white rounded p-2"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha" className="text-gray-300">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-red-500 bg-black text-white rounded p-2"
                value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex justify-around w-full gap-8">
              <button className="rounded text-white bg-red-700 hover:bg-red-900 w-1/2 py-2" onClick={retornar}>
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded text-white bg-gray-700 hover:bg-gray-900 w-1/2 py-2 flex justify-center"
              >
                  {isLoading ? <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  /> :
                    <span>Cadastrar</span>
                  }
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
