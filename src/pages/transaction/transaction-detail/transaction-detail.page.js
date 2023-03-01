import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import services from "../../../services/index.js";

export default function useTransactionDetailPage() {
    const { id } = useParams();

    const getTransactionQuery = useQuery(["get-transaction", id], () => services.transaction.getTransaction(id));
    const transaction = getTransactionQuery.data;

    return {transaction}
}