import transactionData from "../shared/fixtures/transaction.json";
import services from "./index.js";

export default function transactionService() {
    const transactions = [...transactionData];
    let id = transactions[transactions.length - 1].id + 10;
    let detailId = transactions[transactions.length - 1].detailList[0].id + 10;

    const addTransaction = async (dto) => {
        console.log(dto);
        const table = await services.table.getTable(dto.tableId);
        return new Promise((resolve) => {
            setTimeout(() => {
                const newTransaction = {
                    id: ++id,
                    ...dto,
                    tableName: table.name,
                    detailList: dto.detailList.map(d => ({
                        ...d,
                        id: ++detailId,
                        price: d.quantity * d.unitPrice
                    }))
                };
                console.log(newTransaction);

                transactions.push(newTransaction);
                resolve(newTransaction);
            }, 1000);
        });
    };

    const getTransaction = async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const transaction = transactions.find(t => t.id === Number(id));
                if (!transaction) {
                    return reject(new Error(`Transaction with ID ${id} Not Found`));
                }

                let subTotal = 0;
                for (const detail of transaction.detailList) {
                    subTotal += detail.price;
                }

                return resolve({
                    ...transaction,
                    subTotal
                });
            }, 1000);
        });
    }

    const listTransaction = async (page, size) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const offset = page * size;
                let data;
                if (size === 0) {
                    data = [...transactions];
                } else {
                    data = transactions.slice(offset, offset + size);
                }

                resolve({
                    page,
                    size,
                    data: data.map(d => {
                        let subTotal = 0;
                        for (const detail of d.detailList) {
                            subTotal += detail.price;
                        }
                        return ({
                           ...d,
                           subTotal
                        });
                    }),
                    count: data.length,
                    totalPage: Math.ceil(transactions.length / size),
                    totalCount: transactions.length,
                });
            }, 1000);
        });
    };

    const updateTransaction = async (id, updatedTransaction) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const updatedIndex = transactions.findIndex((t) => t.id === id);
                transactions[updatedIndex] = { ...updatedTransaction };

                resolve(transactions[updatedIndex]);
            }, 500);
        });
    };

    const removeTransaction = async (id) => {
        console.log(id);
        return new Promise((resolve) => {
            setTimeout(() => {
                const deletedIndex = transactions.findIndex(t => t.id === id);
                console.log(deletedIndex);
                resolve(transactions.splice(deletedIndex, 1)[0].id);
            }, 1000);
        });
    }

    return {addTransaction, listTransaction, getTransaction, updateTransaction, removeTransaction};
}
