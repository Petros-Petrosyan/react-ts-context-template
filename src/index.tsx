import ReactDOM from "react-dom/client";
import { UsersContextProvider } from "./contexts";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UsersContextProvider>
    <App />
  </UsersContextProvider>
);
