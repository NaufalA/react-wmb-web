import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {TRANSACTION_LIST_PATH} from "../../../shared/constants/routes.js";
import services from "../../../services/index.js";
import {useForm} from "../../../shared/hooks/index.js";
import {date, number, object, string} from "yup";

const validationSchema = object({
    transactionDate: date().required(),
    customerName: string().required(),
    tableId: number().required()
});

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
        },
        {
            title: "Customer Name",
            type: "text",
            name: "customerName",
            placeholder: "Enter Customer Name",
        },
        {
            title: "Table",
            type: "select",
            name: "tableId",
            options: tables?.map(transaction => ({
                id: transaction.id,
                name: transaction.name,
            })),
        },
    ];

    const [formInputs, formData] = useForm(inputs);

    const [detailList, setDetailList] = useState([]);

    const addDetailItem = (detail) => {
        const existingIdx = detailList.findIndex(d => d.productId === detail.productId);
        if (existingIdx !== -1) {
            const updatedDetails = [...detailList];
            updatedDetails[existingIdx] = {
                ...updatedDetails[existingIdx],
                quantity: Number(updatedDetails[existingIdx].quantity) + Number(detail.quantity),
            };
            setDetailList(updatedDetails);
        } else {
            setDetailList((oldState) => [
                ...oldState,
                detail
            ]);
        }
    }

    const removeDetailItem = (index) => {
        const updatedList = [...detailList];
        updatedList.splice(index, 1);

        setDetailList(updatedList);
    }

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit = (values) => {

        const dto = {
            transactionDate: new Date(values.transactionDate).toISOString(),
            customerName: values.customerName,
            tableId: Number(values.tableId),
            detailList: detailList.map(detail => {
                const {quantity, priceId} = detail;
                return {quantity, menuPriceId: priceId};
            })
        };

        dispatch(
            transactionMiddleware.addTransaction(dto)
        ).then((res) => {
            window.alert(`Success Create new Transaction '${res.id}'`);
            navigate(TRANSACTION_LIST_PATH);
        });
    };

    const handleCancel = () => {
        navigate(TRANSACTION_LIST_PATH);
    };

    return {
        inputs: formInputs,
        initialValues: formData,
        validationSchema,
        detailList,
        addDetailItem,
        removeDetailItem,
        handleSubmit,
        handleCancel
    };
}