import tableData from "../shared/fixtures/table.json";

export default function tableService() {
    const tables = [...tableData];
    let id = tables[tables.length - 1].id;

    const addTable = async (dto) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newTable = {
                    id: (++id).toString(),
                    name: dto.name,
                    availability: dto.availability,
                };

                tables.push(newTable);
                resolve(newTable);
            }, 1000);
        });
    };

    const getTable = async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const table = tables.find(t => t.id === Number(id));
                if (!table) {
                    return reject(new Error(`Table with ID ${id} Not Found`));
                }

                return resolve(table);
            }, 1000);
        });
    }

    const listTable = async (page, size) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const offset = page * size;
                let data;
                if (size === 0) {
                    data = [...tables];
                } else {
                    data = tables.slice(offset, offset + size);
                }

                resolve({
                    page,
                    size,
                    data,
                    count: data.length,
                    totalPage: Math.ceil(tables.length / size),
                    totalCount: tables.length,
                });
            }, 1000);
        });
    };

    const updateTable = async (id, updatedTable) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const updatedIndex = tables.findIndex((t) => t.id === id);
                tables[updatedIndex] = { ...updatedTable };

                resolve(tables[updatedIndex]);
            }, 500);
        });
    };

    const removeTable = async (id) => {
        console.log(id);
        return new Promise((resolve) => {
            setTimeout(() => {
                const deletedIndex = tables.findIndex(t => t.id === id);
                console.log(deletedIndex);
                resolve(tables.splice(deletedIndex, 1)[0].id);
            }, 1000);
        });
    }

    return {addTable, listTable, getTable, updateTable, removeTable};
}