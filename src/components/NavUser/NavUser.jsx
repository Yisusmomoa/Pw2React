import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './NavUser.module.css'
import { NavUserStyled } from '../NavUserStyled/NavUserStyled';

export function NavUser(){
    return (
        <div className={styles.navuser}>
            <ul className="tabs">
                <NavUserStyled><h2>Perfil</h2></NavUserStyled>
                <NavUserStyled><h2>Actividad</h2></NavUserStyled>
                <NavUserStyled><h2>Favoritos</h2></NavUserStyled>
               
            </ul>
        </div>
    );
}