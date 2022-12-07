import React from "react";
import NoS from "./NoS";
import RestDuration from "./RestDuration";
import SetDuration from "./SetDuration";
import Timerr from "./Timerr";
import Start from "./Start";

function App() {
  const [time, setTime] = React.useState(0);
  return (
    <div>
      <div id="app">
        <NoS />
        <SetDuration />
        <RestDuration />
        <Start />
      </div>
      <div>
        <Timerr />
      </div>
    </div>
  );
}

export default App;
