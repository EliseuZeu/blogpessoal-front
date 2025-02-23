import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Definição de ícones personalizados usando emojis, já que estamos sem JSX
const icons = {
    sucesso: '✅',
    erro: '❌',
    info: 'ℹ️'
};

export function ToastAlerta(mensagem: string, tipo: 'sucesso' | 'erro' | 'info') {
    let config = {
        position: 'top-right' as const,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark' as const,
        progress: undefined,
    };

    const mensagemFormatada = `${icons[tipo]} ${mensagem}`;

    switch (tipo) {
        case 'sucesso':
            toast.success(mensagemFormatada, {
                ...config,
                style: { backgroundColor: '#222', border: '1px solid #4CAF50', color: '#fff' }
            });
            break;

        case 'erro':
            toast.error(mensagemFormatada, {
                ...config,
                style: { backgroundColor: '#2a0000', border: '1px solid #ff0000', color: '#fff' }
            });
            break;

        case 'info':
        default:
            toast.info(mensagemFormatada, {
                ...config,
                style: { backgroundColor: '#1a1a1a', border: '1px solid #888', color: '#fff' }
            });
            break;
    }
}
