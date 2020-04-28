import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import NavMahjong from "features/nav/NavMahjong";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App bp3-dark">
        <NavMahjong></NavMahjong>
      </div>
    </Provider>
  );
};

export default App;
