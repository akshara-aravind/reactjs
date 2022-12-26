import React,{ useState,useContext } from "react";
  const myContext=React.createContext();
function App() {
  const tog=false;
  const [toggle,setToggle]=useState({tog});
  return (<div>
    <myContext.Provider value={[toggle,setToggle]}>
    <NameForm />
    <NameForm2/>
    </myContext.Provider>
   
    </div>);
}
function NameForm(){
  const [name,setName]=useState("");
  const [toggle] = useContext(myContext);
  function handleSubmit(e){
    if(name.length===0){
      alert("fill your name");
    }
    else
    alert("submitted");
  }
  return(
    <div>
   {toggle?
    <div><form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} onChange={(event)=>{
        setName(event.target.value)
      }}/>
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>
    :
    <div></div>}
  </div>
  );
}
function NameForm2(){
  const [toggle,setToggle] = useContext(myContext);
  return (<button onClick={()=>{
    setToggle(!toggle)
  }}>switch</button>)
}
