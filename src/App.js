import Wrapper from "./components/Calculator/Wrapper/Wrapper";
import Screen from "./components/Calculator/Screen/Screen";
import ButtonBox from "./components/Calculator/ButtonBox/ButtonBox";
import Button from "./components/Calculator/Button/Button";

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
