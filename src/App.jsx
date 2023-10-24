import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainRoute from "./mainRoute";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;
