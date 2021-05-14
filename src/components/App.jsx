import React from "react";
function gone() {
  document.getElementById("btn").style.backgroundColor = "white";
}
function back() {
  document.getElementById("btn").style.backgroundColor = "black";
}

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button id="btn" onMouseOver={back} onMouseOut={gone}>
        Submit
      </button>
    </div>
  );
}

export default App;
