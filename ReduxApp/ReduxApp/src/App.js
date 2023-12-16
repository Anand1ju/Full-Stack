import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className="container">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger">
            -
          </button>
          <input name="quantity" type="text" value="0"/>
          <button type="button" class="btn btn-success">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
