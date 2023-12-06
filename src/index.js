import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Entrance from "./Entrance";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Main() {
  const [showApp, setShowApp] = useState(false);

  const handleButtonClick = () => {
    setShowApp(true);
  };
  return (
    <>{showApp ? <App /> : <Entrance onButtonClick={handleButtonClick} />}</>
  );
}

root.render(<Main />);
