/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../NavBarMain/NavBarMain.module.css';
import {} from 'bootstrap'
import {uMenu} from '../Umenu/Umenu';
import { SearchBox } from '../SearchBox/SearchBox.js';
export function NavBarMain(){
    return (
        <div className = {styles.navmain}>
            <img src="../NavBarMain/MentalBlowLogo.PNG" width={50} height={50} 
            alt="Mental Blow Logo" className= {styles.navLogo}></img>
            <div className = {styles.searchbox}>
                <SearchBox placeholder='Buscar'></SearchBox> 
            </div> 
            <ul>  
                <li>
                    <uMenu></uMenu>    
                </li> 
            </ul>
        </div>        
    );
}