import React from 'react'

function ActionLink() {
    function HandleClick(e){
        e.preventDefault();
        alert("Absi malek")
    }
  return (
    <a href='"/' onClick={HandleClick}> click me</a>
   );
  
}

export default ActionLink