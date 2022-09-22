import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="container">
      Kestutis
      <div className="buttons">
        <Button text="Say hello"/>
        <Button text="Click me" type="submit"/>
        <Button text="Delete" type="button" bgColor="blue"/>
      </div>
      <Button text="Take" type="button" bgColor="green"/>

    </div>
  );
}

export default App;
