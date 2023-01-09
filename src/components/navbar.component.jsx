import {Container} from "./containers/index.js";

export default function Navbar() {
    return (
        <nav className="bg-slate-400 p-4">
            <Container>
                <h1 className="text-2xl">Warung Makan Bahari</h1>
            </Container>
        </nav>
    )
}