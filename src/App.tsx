import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/services/store";

function App() {
  return (
    <Provider store={store}>
      <div>ok</div>
    </Provider>
  );
}

export default App;
