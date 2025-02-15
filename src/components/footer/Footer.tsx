import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear();

    return (
        <div className="flex justify-center bg-black text-white border-t-2 border-red-700 shadow-lg relative">
            {/* Fundo Estrelado */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

            <div className="container flex flex-col items-center py-6 relative z-10">
                {/* Nome do Blog */}
                <p className="text-xl font-bold text-red-600 drop-shadow-md">
                    Blog Sombrio |Feito por Eliseu F Souza Copyright: {data}
                </p>
                <p className="text-lg text-gray-300">Acesse nossas redes sociais</p>

                {/* Ícones das Redes Sociais */}
                <div className="flex gap-4 mt-2">
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-110">
                        <LinkedinLogo size={48} weight="bold" />
                    </a>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-110">
                        <InstagramLogo size={48} weight="bold" />
                    </a>
                    <a href="#" className="hover:text-red-600 transition-all duration-300 hover:scale-110">
                        <FacebookLogo size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
