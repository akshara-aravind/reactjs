function Greetings(props){
    const hr=props.date.getHours();
    return (
    <div>
    <h1> Hello {props.name}, </h1>
    <h1>
    {hr<12 && <div>Good Morning!</div>}
    {hr>12 && hr<15 && <div>Good Afternoon!</div>}
    {hr>15 && <div>Good Evening!</div>}
    </h1>
    
    </div>
    );
    }
    
  function App() {
    return (
      <div>
      <Greetings name="sara" date={new Date()}/> 
      </div>
    );
  }