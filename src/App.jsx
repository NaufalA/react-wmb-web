import './App.css'
import {Navbar} from "./components/index.js";
import Routing from "./pages/routing.jsx";

function App() {

    return (
        <div className="min-h-screen">
            <Navbar/>
            <Routing />
        </div>
    )
}

export default App
