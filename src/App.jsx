import "./App.css";
import explorer from "./Data/folderData";
import Folder from "./components/Folder";

function App() {
  return (
    <>
      <div>
        <Folder explorer={explorer} />
      </div>
    </>
  );
}

export default App;
