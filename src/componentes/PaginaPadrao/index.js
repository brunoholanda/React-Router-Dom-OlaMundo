import Banenr from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao () {
    return (
        <main>
            <Banenr />
            <Outlet />
           
            {/* Na rota "/", a estrutura a ser renderizada 'e:
            
            <PaginaPadrao>
                <Inicio />
            </PaginaPadrao>

            /* Na rota "/sobremim", a estrutura a ser renderizada 'e:
            
            <PaginaPadrao>
                <SobreMim />
            </PaginaPadrao>
            

            */}
            
        </main>
    )
}