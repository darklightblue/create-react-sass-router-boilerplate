import React from "react";
import styles from "./App.module.scss";

import Routes from "pages/Routes/Routes";

function App() {
  return (
    <div className={styles.app}>
      <Routes />
    </div>
  );
}

export default App;
