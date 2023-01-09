import {Container} from "../../components/containers";
import {ProtectedRoute} from "../../components/index.js";

export default function Dashboard() {
    return (
        <ProtectedRoute>
            <Container>
                <h1 className="text-xl">Dashboard</h1>
            </Container>
        </ProtectedRoute>
    );
}