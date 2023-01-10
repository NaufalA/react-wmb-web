import './App.css'
import {Sidebar} from "./components/index.js";
import Routing from "./pages/routing.jsx";

function App() {

    return (
        <div className="min-h-screen bg-background text-foreground flex">
            <Sidebar/>
            <Routing />
        </div>
    )
}

export default App
