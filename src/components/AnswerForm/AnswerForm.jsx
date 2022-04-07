import React from 'react';

import {} from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import styles from './AnswerForm.module.css';

export function AnswerForm(){
    return (
        <div className="qform">
              <div className="qhead">
                  <h5>Titulo</h5>
                  <p>Be specific and imagine you’re asking a question to another person</p>
                  <textarea name="" id=""  placeholder="Titulo"></textarea>
              </div>
              <div className="qbody">
                  <h5>Body</h5>
                  <p>Include all the information someone would need to answer your question</p>
                  <div className="textcontainer">
      
                    <div className="qbodtopc">
                      <input id = "default-btn" type="file" hidden/>
                        <button className= "Bicon" id="custom-btn1">
                        <i className="far fa-image"></i>
                        </button>
                        <button className= "Bvcon" id="youtubeirl">
                        <i className="fab fa-youtube" ></i>
                      </button>
                      <input id = "default-btn2" type="file" hidden/>
                      <button className= "Bvcon" id="videoirl">
                        <i className="fas fa-film"></i>
                      </button>
                    </div>
      
                    <div className="irl" id="TexVid">
                      <textarea className = "videoUrl" id= "goUrl" name=""  placeholder="URL, Video/watch"></textarea>
                      <button id="go-youtube" >ok</button>
                    </div>
      
                    <textarea className = "qtextarea" name="" id=""  placeholder=""></textarea>
                    
                    <div className="botttontext">
      
                      <div className="wrapper">
                        <div className="image">
                            <img id = "img1" src="" alt=""/>
                        </div>
                        <div id="cancel-btn"><i className="fas fa-times"></i></div>   
                        <div className="file-name1">File name here</div>   
                      </div>
      
                      <div className="wraperVid">
                        <iframe id = "UVideo" width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
      
                    </div>
      
                  </div>
              </div>
              <div className="qtags">
                  <h5>Tags</h5>
                    <Dropdown>
                        <Dropdown.Toggle variant="warning">
                            Open Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                Home Page
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
              </div>
            </div>
    );
}