import "./App.css";
import Button from "./components/Calculator/Button/Button";

const App = () => {
  return (
    <Button
      className=""
      value="0"
      onClick={() => {
        console.log("Button clicked!");
      }}
    />
  );
};

export default App;
