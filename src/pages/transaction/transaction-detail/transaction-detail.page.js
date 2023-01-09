import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {transactionMiddleware} from "../../../store/middlewares/index.js";

export default function useTransactionDetailPage() {
    const { id } = useParams();

    const transaction = useSelector(
        (state) => state.transaction.currentTransaction
    );

    const dispatch = useDispatch();
    useEffect(() => {
        if (!transaction || transaction.id !== Number(id)) {
            dispatch(transactionMiddleware.getTransaction(id));
        }
    }, [dispatch, id, transaction]);

    return {
        transaction
    }
}