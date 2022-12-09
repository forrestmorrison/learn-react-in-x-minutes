import './App.css';

const Person = () => {
  return (
    <>
      <h1>First Name: Forrest</h1>
      <h2>Last Name: Morrison</h2>
      <h3>Age: 33</h3>
    </>
  )
}

const App = () => {

  const name = 'Forrest';
  const isUserLoggedIn = true;

  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
