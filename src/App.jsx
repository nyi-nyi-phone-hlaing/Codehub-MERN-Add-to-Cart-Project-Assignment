import Main from "./layouts/Main";
import ItemContextProvider from "./store/itemContext";

const App = () => {
  return (
    <ItemContextProvider>
      <Main />
    </ItemContextProvider>
  );
};

export default App;
