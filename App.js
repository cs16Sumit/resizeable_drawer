import * as React from "react";
import "./styles.css";
import { SplitView } from "./components/SplitView";

export default function App() {
  return (
    <div className="App">
      <div>
        <SplitView
          left={<div style={{ margin: "1rem" }}>Left item</div>}
          right={<div style={{ margin: "1rem" }}>Right item</div>}
        />
      </div>
    </div>
  );
}
