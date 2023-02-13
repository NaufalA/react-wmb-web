import {Button} from "../../../components/buttons/index.js";
import {useEffect, useState} from "react";
import services from "../../../services/index.js";
import {FormInput} from "../../../components/forms/index.js";

export default function MenuSelector(props) {
    const {onAddItem} = props;

    const [categoryId, setCategoryId] = useState(1);
    const [menuData, setMenuData] = useState(null);
    const [menuCategories, setMenuCategories] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        services.menu.listCategory().then(res => {
            setMenuCategories(res);
        });
    }, []);

    useEffect(() => {
        setLoading(true);
        services.menu.listMenuByCategory(categoryId).then((res) => {
            setMenuData(res.data);

        }).finally(() => {
            setLoading(false)
        });
    }, [categoryId]);

    const [selectedMenu, setSelectedMenu] = useState(undefined);

    const handleAddItem = (e) => {
        e.preventDefault();

        const {quantity} = e.target;

        onAddItem({
            quantity: quantity.value,
            productId: selectedMenu.id,
            productName: selectedMenu.name,
            priceId: selectedMenu.priceId,
            unitPrice: selectedMenu.unitPrice,
            price: quantity.value * selectedMenu.unitPrice,
        });
    }

    return (
        <div className="grow p-8">
            <div className="grid grid-flow-col justify-items-stretch gap-2 py-3">
                {menuCategories?.map((cat, i) => (
                    <Button
                        key={`category-${i}`}
                        onClick={() => setCategoryId(cat.id)}
                        disabled={isLoading}
                    >
                        {cat.name}
                    </Button>
                ))
                }
            </div>
            <hr/>
            <div className="grid grid-flow-col content-center gap-2 p-6">
                {menuData?.map((menu, i) => (
                    <Button
                        key={`menu-${i}`}
                        onClick={() => setSelectedMenu(menu)}
                        disabled={isLoading}
                        className="bg-accent"
                    >
                        {menu.name}
                    </Button>
                ))
                }
            </div>
            {selectedMenu && (
                <div className="mx-auto w-fit p-4 bg-accent shadow-md">
                    <form onSubmit={handleAddItem} className="flex flex-col gap-4">
                        <div>
                            <h3 className="font-bold">{selectedMenu.name}</h3>
                            <h3>{selectedMenu.unitPrice}</h3>
                        </div>
                        <FormInput
                            title="Quantity"
                            type="number"
                            name="quantity"
                            required
                            defaultValue={1}
                            min={1}
                            disabled={isLoading}
                        />
                        <div className="grid grid-flow-col gap-2">
                            <Button
                                onClick={() => setSelectedMenu(undefined)}
                                disabled={isLoading}
                                className="bg-danger"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="bg-success"
                            >Add
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}