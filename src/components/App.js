import React from "react";
import Header from "./header/Header";
import WikiList from "./wiki/WikiList";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <WikiList />
    </React.Fragment>
  );
};

export default App;
