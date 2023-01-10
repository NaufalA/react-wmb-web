import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {TRANSACTION_LIST_PATH} from "../../../shared/constants/routes.js";
import transactionMiddleware from "../../../store/middlewares/transaction.middleware.js";
import services from "../../../services/index.js";

export default function useAddTransactionPage() {
    const [tables, setTables] = useState(null);

    useEffect(() => {
        if (!tables) {
            services.table.listTable(0, 0).then((res) => {
                setTables(res.data);
            })
        }
    }, []);

    const inputs = [
        {
            title: "Transaction Date",
            type: "datetime-local",
            name: "transactionDate",
            placeholder: "Enter Transaction Date",
            required: true,
        },
        {
            title: "Customer Name",
            type: "text",
            name: "customerName",
            placeholder: "Enter Customer Name",
            required: true,
        },
        {
            title: "Table",
            type: "select",
            name: "tableId",
            options: tables?.map(transaction => ({
                id: transaction.id,
                name: transaction.name,
            })),
            required: true,
        },
    ];

    const [detailList, setDetailList] = useState([]);

    const addDetailItem = (detail) => {
        setDetailList((oldState) => [
            ...oldState,
            detail
        ]);
    }

    const removeDetailItem = (index) => {
        const updatedList = [...detailList];
        updatedList.splice(index, 1);

        setDetailList(updatedList);
    }

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        const {target} = e;

        console.log(new Date(target.transactionDate.value).toISOString());

        dispatch(
            transactionMiddleware.addTransaction({
                transactionDate: new Date(target.transactionDate.value).toISOString(),
                customerName: target.customerName.value,
                tableId: Number(target.tableId.value),
                detailList: detailList.map(detail => {
                    const { quantity, priceId } = detail;
                    return { quantity, menuPriceId: priceId };
                })
            })
        ).then((res) => {
            window.alert(`Success Create new Transaction '${res.id}'`);
            navigate(TRANSACTION_LIST_PATH);
        });
    };

    const onCancel = () => {
        navigate(TRANSACTION_LIST_PATH);
    };

    return {inputs, detailList, addDetailItem, removeDetailItem, handleSubmit, onCancel};
}