function Login() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-black text-white">
            {/* Coluna Esquerda - Formulário */}
            <div className="flex justify-center items-center bg-gray-900 p-10 rounded-lg shadow-lg">
                <form className="flex flex-col w-2/3 gap-5 p-5 bg-[#111] rounded-lg shadow-lg border border-red-600">
                    <h2 className="text-red-500 text-4xl text-center font-bold">Entrar</h2>

                    <div className="flex flex-col">
                        <label htmlFor="usuario" className="text-gray-300">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="border-2 border-red-500 bg-black text-white rounded p-2 outline-none focus:ring focus:ring-red-600"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="senha" className="text-gray-300">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-red-500 bg-black text-white rounded p-2 outline-none focus:ring focus:ring-red-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-red-700 hover:bg-red-900 text-white font-bold rounded transition duration-300"
                    >
                        Entrar
                    </button>

                    <hr className="border-red-500" />

                    <p className="text-center">
                        Ainda não tem uma conta?{' '}
                        <span className="text-red-500 cursor-pointer hover:underline">Cadastre-se</span>
                    </p>
                </form>
            </div>

            {/* Coluna Direita - Imagem */}
            <div className="hidden lg:flex">
                <img
                    src="https://ik.imagekit.io/sdkyquy76/Blogpessoal/DALL_E%202025-02-17%2009.15.49%20-%20A%20mysterious%20outer%20space%20scene%20with%20a%20glowing%20red%20nebula,%20distant%20stars,%20and%20a%20dark%20cosmic%20atmosphere.%20The%20nebula%20swirls%20with%20deep%20crimson%20and%20black%20h.webp?updatedAt=1739794613431"
                    alt="Imagem Espacial"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Login;
