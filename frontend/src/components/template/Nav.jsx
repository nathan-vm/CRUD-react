import './Nav.css'
import React from 'react'

{/* CRIAR UM COMPONENTE PARA CADA "BOTAO" DE MENU */}

export default props=>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
    </aside>