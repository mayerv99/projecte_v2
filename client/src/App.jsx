import GlobalStyle from "./GlobalStyle";
import BaseContextProvider from "./Context/BaseContext";
import Forms from "./Components/Forms";
import Lists from "./Components/Lists";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BaseContextProvider>
        <Forms />
        <Lists />
      </BaseContextProvider>
    </div>
  );
}

export default App;
