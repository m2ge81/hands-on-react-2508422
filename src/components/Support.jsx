import { useState, useEffect } from "react";
const pageTitle = document.title;

export default()=>{
  const[count, setCount] = useState(0);
  useEffect(()=>{
    document.title = count >0 ? `${pageTitle}--${count}` : pageTitle;
  });
  return <button className="outline" onClick={()=> setCount(count+1)}>
    {(()=>{
      if (count === 0){
        return "clickme";
      }
      else{
        return `current ${count} times ${document.title}`;
      }
    })()
    }
    </button>
}