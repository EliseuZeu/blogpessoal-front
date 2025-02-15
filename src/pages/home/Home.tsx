import { useEffect } from "react";

function Home() {
    // Efeito sonoro no hover do botão
    useEffect(() => {
        const button = document.getElementById("darth-button");
        let audio: HTMLAudioElement;

        if (button) {
            button.addEventListener("mouseenter", () => {
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
                audio = new Audio("https://www.myinstants.com/media/sounds/darth-vader-breathing.mp3");
                audio.play();
            });
        }

        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, []);

    return (
        <div className="flex justify-center bg-black">
            {/* Fundo Estrelado Animado */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 animate-twinkle"></div>

            <div className="container grid grid-cols-1 sm:grid-cols-2 text-gray-300 p-6 relative z-10">
                
                {/* Texto */}
                <div className="flex flex-col gap-6 items-center justify-center text-center">
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
                            className="rounded-lg text-gray-300 border-2 border-white py-2 px-6 transition-all duration-300 hover:bg-red-700 hover:text-white hover:shadow-red-500/50 hover:scale-105"
                        >
                            Nova Postagem
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
    );
}

export default Home;
