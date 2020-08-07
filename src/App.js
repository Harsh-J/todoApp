import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckList from './CheckList'

import FlipMove from 'react-flip-move';
import remove from './remove.png'
import edit from './edit.png';
import complete from './complete.png';
import removeopen from './removeopen.png';
function App() {


  //making a state for the title and text to be written in
  //todos card

 
  const [todos, setTodos] = useState([
   
    ]);
    const [todoToShow,setToDoShow]=useState("all");
const[value,setValue]=useState("");
const[valueTitle,setValueTitle]=useState("");
const [isCompleted,setIsCompleted]=useState(false);


const imagesPath={
  removeopen:removeopen,
  complete:complete
}
 
useEffect(()=>{

  const data=localStorage.getItem('myTodoList');
  if(data){
    setTodos(JSON.parse(data));
  }

},[])
useEffect(()=>{

  localStorage.setItem('myTodoList',JSON.stringify(todos));

})

  const handleSubmit = (e) => {

    e.preventDefault();
    if(!value || !valueTitle) return;
    
    addTodo(value,valueTitle);
    setValue("");
    setValueTitle("");
    setIsCompleted(false);
    
  }
const addTodo=(text,title,isCompleted)=>{

  const newTodos = [...todos, { text,title,isCompleted}];
    setTodos(newTodos);

};
const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
 
};


const markCompleted=(index)=>{


  const newTodos = [...todos];
  
     if( newTodos[index].isCompleted===true){
      newTodos[index].isCompleted=false;
      
     }
     else {
      newTodos[index].isCompleted=true;
      
     }
    
    
     setTodos(newTodos);

};




const showmarkCompleted=()=>{

  const newTodos=[...todos];
  newTodos.filter(todo=>todo.isCompleted);
  setTodos(newTodos);

}
const updateToDoShow=(s)=>{

  setToDoShow(s);
}
let todosnew=[];
    if(todoToShow==="all"){
      todosnew=todos;
    }
    else if(todoToShow==="active"){
      todosnew=todos.filter(todo=>!todo.isCompleted);
    }
    else if(todoToShow==="completed"){
        todosnew=todos.filter(todo=>todo.isCompleted);
    }
    
  
  return (

   

    <div className="innerDiv" >

      <p>
        MyTodo
        </p>
        <div className="info"><p>Hover/Tap on the todos to access delete and Mark Complete option after creating it</p></div>
      <form className="form" onSubmit={handleSubmit} >
        <input className="input" type="text" value={valueTitle}  onChange={e => setValueTitle(e.target.value)} placeholder="Add the Title..." />
        <input className="input" type="text" value={value}  onChange={e => setValue(e.target.value)} placeholder="Add the Task..." />
        <button className="btn" >Create</button>
      </form>
      <div className="middleBtns">
        <button className="btnm" onClick={()=>updateToDoShow("all")}>All</button>
        <button className="btnm" onClick={()=>updateToDoShow("active")}>Active</button>
        <button className="btnm" onClick={()=>updateToDoShow("completed")}>Completed</button>
      </div>
      <FlipMove duration={250} easing="ease-out">
      {todosnew.map((todo,index)=>(

        
      <div className="innerCheckList">


        <h1>{todo.title}</h1>

        <p>{todo.text}</p>

        <div className="icons">
          
          
          
          <img src={remove} onClick={()=>removeTodo(index)}></img>
          
          <img src={edit} onClick={()=>markCompleted(index)}></img>

        </div>
      </div>

        )      )}
        </FlipMove>
     

    </div>


  );
}

export default App;
