import {Container} from "../../components/containers";
import {ProtectedRoute} from "../../components/index.js";
import {Link} from "react-router-dom";
import {MENU_LIST_PATH} from "../../shared/constants/routes.js";

export default function Dashboard() {
    return (
        <ProtectedRoute>
            <Container>
                <h1 className="text-xl">Dashboard</h1>
                <Link to={MENU_LIST_PATH}>Manage Menu</Link>
            </Container>
        </ProtectedRoute>
    );
}