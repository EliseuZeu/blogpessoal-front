import { JSX } from "react/jsx-runtime";
import Postagem from "./Postagem";

export default interface Tema{
    map(arg0: (tema: any) => JSX.Element): import("react").ReactNode;
    id: number;
    descricao: string;
    postagem?: Postagem | null;
}