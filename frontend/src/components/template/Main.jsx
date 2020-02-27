import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header></Header>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>