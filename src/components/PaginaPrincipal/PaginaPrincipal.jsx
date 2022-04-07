import React from 'react';

import {} from 'bootstrap'
import styles  from '../PaginaPrincipal/PaginaPrincipal.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { AskBtn } from '../AskBtn/AskBtn';

const Title = styled.h2`
  font-size: 1.5em;
  color: palevioletred;
`;
export function PaginaPrincipal(){
    return (

        <div className={styles.container}>
        
          <div className={styles.content}>
            
               <div className={styles.mainbar}>
               <Container>
                      <Row md={4}>
                          <Dropdown>
                            <Dropdown.Toggle variant="warning">
                            Open Menu
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                Casa
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Videojuegos
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Tecnología
                            </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <div className={styles.ask}> 
                              <AskBtn>Ask question</AskBtn>
                          </div>
                      </Row>
                    </Container>
                  <div className={styles.Todo}>
                    
                    

                    <div className={styles.SeccionNoticias}>

                      <div className={styles.Noticia}>

                        <div className={styles.bodyN}>

                          <div className={styles.left}>
                            <Title id= "valueV6" >0</Title>
                            <p>Votes</p>
                            <Title id= "valueA6" >0</Title>
                            <p>Answers</p>
                          </div>

                          <div className={styles.center}>
                            <div className={styles.title}>  
                              <a href=""> <h2 id="Pregunta6">Titulo: Lorem ipsum dolor.</h2></a>
                            </div>
                            <h4>Descripción corta: </h4>
                            <p>Lorem ipsum dolor, sit amet consectetur 
                              adipisicing elit. Officia eaque tempora minima
                              doloribus aspernatur? 
                              Ipsum non expedita soluta fugit? Incidunt
                              voluptates aperiam ex quia id esse eveniet
                              velit vitae ipsam.</p>
                              
                              <div className= {styles.InfoNoticia}>
                                <p><span>#Utiles</span> </p>
                                <p><span>#NoUtiles</span></p>
                                <p><span>#Respuestas</span></p>
                                <p><span>Categorias:</span> </p>                     
                              </div>
                              <br/>
                              <div className={styles.InfoUsuarioPreg}>
                                <div className={styles.time}>
                                  <p>posted 1 min ago</p>
                                </div>
                                <div className={styles.infoP}>
                                  <img src="/Media/default-.jpg" alt="" 
                                  width="90" height="72"/>
                                  <a href=""><p id="User6">Usuario</p></a>
                                </div>
                              </div>

                          </div>


                        </div>
                      </div>

                                           

                    </div>

                    
                    <div className={styles.containerpag}>
                      <div className={styles.pagination}>
                        <ul>  </ul>
                      </div>
                    </div>
                  </div>

               </div>
               
          </div>

      </div>
    );
}