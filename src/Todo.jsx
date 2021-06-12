import React from "react";

const Todolist = (props) =>
{
 
   return (
       <>
         <div className = "display_items" >
         <i className="fa fa-times"  id = "cross" aria-hidden="true" onClick = {() =>{
           props.onSelect(props.id)
         }}>     
         </i>
          <li>{props.list}</li>
         </div>

       </>
   );

};
export default Todolist;