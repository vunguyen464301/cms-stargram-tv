import { Provider } from "react-redux";
import { store } from "./src/services/store";
import RouterApp from "./src/routing/RouterApp";

function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
}

export default App;
