import React from 'react';
import logo from './logo.svg';
import remove from './remove.png'
import edit from './edit.png';
import './App.css';

function CheckList({title,text}) {
  return (
    
      <div className="innerCheckList">

        
        <h1>{title}</h1>
        
        <p>{text}</p>
        
        <div className="icons">
        <img src={edit}></img>
        
        <img src={remove}></img>
       
        </div>
      </div>

    
  );
}

export default CheckList;
