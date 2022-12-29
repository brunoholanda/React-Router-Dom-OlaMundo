import { NavLink } from 'react-router-dom';

import styles from './MenuLink.module.css';

export default function MenuLink ({ children, to }) {
    
    //const localizacao = useLocation (); //useLocation e um hook do react router dom
    
    
    return (
        <NavLink
        className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
        `}
        to={to}
        end
        >
        {children}
    </NavLink>
    )
}

//Da forma feita acima, o projeto continua a funcionar igual a antes! (Exemplo abaixo) Mas em vez de obter a rota através do useLocation e fazer uma verificação da rota atual, obtemos diretamente essa verificação pelo componente NavLink.
// ${localizacao.pathname === to ? styles.linkDestacado : ""} A LINHA 14 FOI SUBSTITUIDA