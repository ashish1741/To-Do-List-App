import React, { useState } from "react" ;
import Todolist from "./Todo";
import "./index.css"

const App = () =>
{
    const[item , setitem] = useState(" ");
    const[additem , setadditem] = useState([ ]);
    const inputEvent = (e) =>{
        setitem(e.target.value);
    };

    const add = () =>
    {
        setadditem((olditems)=>{
            return[...olditems,item]
        });
        setitem(' ');
    }
    const deleteItem = (id) =>
    {
        console.log("clicked")
        setadditem((olditems) =>{
            return olditems.filter((element,index) =>{
                return index !== id;
            })
        })
    }
    return (
        <>
          <div className = "container" >
              <h1 className = "tittle" >To do List App</h1>
              <br />
              <input type = "text" placeholder =  "Insert Your Work" onChange = {inputEvent}  value = {item} required/> 
              <button onClick = {add} > +  </button>
              <ol>
                  {
                      additem.map( (val ,index) =>{
                           return <Todolist 
                           list = {val}
                           key = {index}
                           id = {index}
                           onSelect = {deleteItem}
                           
                           />
                      })
                  }
                   
              </ol>
          </div>
        </>
    )
};
export default App;
