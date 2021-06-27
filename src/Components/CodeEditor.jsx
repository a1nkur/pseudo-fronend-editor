import styles from "./CodeEditor.module.css";
import AceEditor from "react-ace";
import React, { useState, useContext } from "react";

import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import { ThemeContext } from "../Contexts/ThemeContext";

const CodeEditor = ({ changeAppState }) => {
  // States
  const [editorData, setEditorData] = useState("");

  // Choose Theme
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // Event Handlers
  const handleChange = value => {
    setEditorData(value);

    changeAppState(value);
  };

  return (
    <div className={styles["code-editor--container"]}>
      <AceEditor
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: theme.bg,
          color: theme.syntax,
        }}
        onChange={handleChange}
        mode="xml"
        fontSize={16}
        wrapEnabled={true}
        highlightActiveLine={false}
        showPrintMargin={false}
        theme="monokai"
        editorProps={{
          $blockScrolling: true,
        }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
