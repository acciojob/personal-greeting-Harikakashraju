
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
  const [greeting,setGreeting]=useState("")
  const [exclmation , setExclamation] = useState("")
  function hello(event){
    setGreeting("Hello")
    setName(event.target.value)
    setExclamation("!")
  }
  return (
    <div className="display">
        {/* Do not remove the main div */}
        <label for="name">Enter your name:</label><br/>
        <input type="text" onChange={hello}/>
        <p>{greeting} {name}{exclmation}</p>
    </div>
  )
}

export default App
