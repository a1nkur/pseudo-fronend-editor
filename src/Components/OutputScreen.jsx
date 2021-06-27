import styles from "./OutputScreen.module.css";

const OutputScreen = ({ editorCode }) => {
  return (
    <div className={styles["output-screen--container"]}>
      <iframe
        srcDoc={editorCode}
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default OutputScreen;
