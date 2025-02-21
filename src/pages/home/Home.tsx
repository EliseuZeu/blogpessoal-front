import { useEffect, useRef } from "react";
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/modalpostagem/ModalPostagem";

function Home() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const button = document.getElementById("darth-button");

        if (button) {
            const handleMouseEnter = () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
                audioRef.current = new Audio("https://www.myinstants.com/media/sounds/darth-vader-breathing.mp3");
                audioRef.current.play();
            };

            button.addEventListener("mouseenter", handleMouseEnter);

            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                if (audioRef.current) {
                    audioRef.current.pause();
                }
            };
        }
    }, []);

    return (
        <>
        <div className="relative flex justify-center bg-black">
            {/* Fundo Estrelado Animado */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-twinkle z-[-1]"></div>

            <div className="container grid grid-cols-1 sm:grid-cols-2 text-gray-300 p-6 relative z-10">
                
                {/* Texto */}
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse">
                        Lado Sombrio da Força
                    </h2>
                    <p className="text-xl text-gray-300 drop-shadow-md">
                        Eu sou seu guia neste vasto universo.
                    </p>

                    {/* Botão aprimorado */}
                    <div className="flex justify-around gap-4">
                        <div 
                            id="darth-button"
                            className="rounded-lg text-gray-300 transition-all duration-300 hover:bg-red-700 hover:text-white hover:shadow-red-500/50 hover:scale-105"
                            >
                            <ModalPostagem />
                        </div>
                    </div>
                </div>

                {/* Imagem */}
                <div className="flex justify-center">
                    <img
                        src="https://ik.imagekit.io/sdkyquy76/Blogpessoal/darth-vader-svgrepo-com%20(2).svg?updatedAt=1739650030531"
                        alt="Imagem Página Home"
                        className="w-full sm:w-2/3 md:w-1/2 drop-shadow-2xl hover:scale-105 transition-transform duration-300 animate-floating"
                        />
                </div>

            </div>
        </div>
         <ListaPostagens />
    </>
    );
}

export default Home;
