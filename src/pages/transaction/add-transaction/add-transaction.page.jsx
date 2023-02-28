import {FormikForm} from "../../../components/forms/index.js";
import useAddTransactionPage from "./add-transaction.page.js";
import MenuSelector from "./menu-selector.component.jsx";
import DetailList from "./detail-list.component.jsx";

export default function AddTransaction() {
    const {
        inputs,
        initialValues,
        validationSchema,
        detailList,
        addDetailItem,
        removeDetailItem,
        handleSubmit,
        handleCancel
    } = useAddTransactionPage();

    return (
        <div className="flex flex-row gap-8 h-full">
            <div className="w-1/4 shadow-lg p-8 h-full">
                <h1>Add Transaction</h1>
                <FormikForm
                    inputs={inputs}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    submitText="Order"
                    onCancel={handleCancel}
                    extraContent={(
                        <>
                            <h2>Items</h2>
                            <DetailList detailList={detailList} onRemoveItem={removeDetailItem}/>
                        </>
                    )}
                />
            </div>
            <MenuSelector onAddItem={addDetailItem}/>
        </div>
    );
}
