import {Container} from "../../components/containers";
import {ProtectedRoute} from "../../components/index.js";
import {Link} from "react-router-dom";
import {MENU_LIST_PATH, TABLE_LIST_PATH, TRANSACTION_LIST_PATH} from "../../shared/constants/routes.js";

export default function Dashboard() {
    return (
        <ProtectedRoute>
            <Container>
                <h1 className="text-xl">Dashboard</h1>
                <Link to={MENU_LIST_PATH}>Manage Menu</Link>
                <Link to={TABLE_LIST_PATH}>Manage Table</Link>
                <Link to={TRANSACTION_LIST_PATH}>Manage Transaction</Link>
            </Container>
        </ProtectedRoute>
    );
}