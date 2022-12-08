import './App.css';

const App = () => {

  const name = 'Forrest';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello {2 + 2}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>name</h1>
          <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
