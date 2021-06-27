import { Fragment } from "react";
import styles from "./App.module.css";
import CodeEditor from "./Components/CodeEditor";
import OutputScreen from "./Components/OutputScreen";
import classes from "./Components/UI/Button.module.css";

import { ThemeContext } from "./Contexts/ThemeContext";

import { useState, useContext } from "react";

function App() {
  // State
  const [editorCode, setEditorCode] = useState(``);
  const [showOutput, setShowOutput] = useState(false);

  const { isLightTheme, ToggleTheme, btnLight, btnDark } =
    useContext(ThemeContext);
  const btnTheme = isLightTheme ? btnDark : btnLight;

  // Event Handlers
  const changeAppState = data => {
    setEditorCode(data);
  };

  const handleClick = () => {
    setShowOutput(true);
  };

  // Download feature
  const handleSaveOnClick = () => {
    const element = document.createElement("a");
    const file = new Blob([editorCode], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "download.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <Fragment>
      <div className={styles.App}>
        <CodeEditor changeAppState={changeAppState} />
        <OutputScreen editorCode={showOutput ? editorCode : ""} />
      </div>
      <div className="btn-controls">
        <button className={classes.btn} onClick={handleClick}>
          Run Code
        </button>
        <button className={classes.btn} onClick={handleSaveOnClick}>
          Download
        </button>
        <button
          onClick={ToggleTheme}
          className={classes.btn}
          style={{ backgroundColor: btnTheme.bg, color: btnTheme.syntax }}
        >
          Toggle Theme
        </button>
      </div>
    </Fragment>
  );
}

export default App;
