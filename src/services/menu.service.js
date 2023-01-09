import menuData from "../shared/fixtures/menu.json";

export default function menuService() {
    const menus = [...menuData];
    let id = menus[menus.length - 1].id;

    const addMenu = async (dto) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newMenu = {
                    id: (++id).toString(),
                    name: dto.name,
                    unitPrice: dto.unitPrice,
                    menuCategory: dto.menuCategory,
                };

                menus.push(newMenu);
                resolve(newMenu);
            }, 1000);
        });
    };

    const listMenu = async (page, size) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const offset = page * size;
                let data;
                if (size === 0) {
                    data = [...menus];
                } else {
                    data = menus.slice(offset, offset + size);
                }

                resolve({
                    page,
                    size,
                    data,
                    count: data.length,
                    totalPage: Math.ceil(menus.length / size),
                    totalCount: menus.length,
                });
            }, 1000);
        });
    };

    const listMenuByCategory = async (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = menus.filter(m => m.menuCategory.id === categoryId);

                resolve({
                    data,
                });
            }, 500);
        });
    };

    const removeMenu = async (id) => {
        console.log(id);
        return new Promise((resolve) => {
            setTimeout(() => {
                const deletedIndex = menus.findIndex(c => c.id === id);
                console.log(deletedIndex);
                resolve(menus.splice(deletedIndex, 1)[0].id);
            }, 1000);
        });
    }

    return {addMenu, listMenu, listMenuByCategory, removeMenu};
}