import React from "react";
import "./App.css";
// import Cards from "./Cards";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Button variant="primary" className="mr-2">
          Primary
        </Button>
        <Cards value="Subash" />
      </header> */}
      <Test
        Name="Subash"
        Title="King of Pirates"
        Achievments="Won against Warlords"
      />
    </div>
  );
}

export default App;
