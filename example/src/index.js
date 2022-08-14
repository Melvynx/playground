import Playground from "@agney/playground";
import "@reach/tabs/styles.css";
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

const App = () => {
  const snippet = {
    markup: `<div id=app />`,
    css: `div { color: red }`,
    javascript: `const App = () => {
  return <div>Coucou</div>
}

render(<App />);
    `,
  };
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Playground
        initialSnippet={snippet}
        defaultEditorTab="javascript"
        defaultResultTab="result"
        mode="dark"
        transformJs
        presets={["es2015", "react"]}
      />
    </div>
  );
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
