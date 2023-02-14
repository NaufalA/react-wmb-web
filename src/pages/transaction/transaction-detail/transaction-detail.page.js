import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {transactionAction} from "../../../store/actions/index.js";

export default function useTransactionDetailPage() {
    const { id } = useParams();

    const transaction = useSelector(
        (state) => state.transaction.currentTransaction
    );

    const dispatch = useDispatch();
    useEffect(() => {
        if (!transaction || transaction.id !== Number(id)) {
            dispatch(transactionAction.getTransaction.requested(id));
        }
    }, [dispatch, id, transaction]);

    return {
        transaction
    }
}