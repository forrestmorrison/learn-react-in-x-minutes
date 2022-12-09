import './App.css'

const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.firstName}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person firstName='Ben' lastName='Morrison' age='29'/>
      <Person firstName='Forrest' lastName='Morrison' age={30 + 3}/>
      <Person />
    </div>
  );
}

export default App;
