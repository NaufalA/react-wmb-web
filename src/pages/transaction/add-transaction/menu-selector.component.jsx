import {Button} from "../../../components/buttons/index.js";
import {useEffect, useState} from "react";
import services from "../../../services/index.js";
import {FormInput} from "../../../components/forms/index.js";

export default function MenuSelector(props) {
    const {onAddItem} = props;

    const [categoryId, setCategoryId] = useState(1);
    const [menuData, setMenuData] = useState(null);
    const [menuCategories, setMenuCategories] = useState();
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
        <div className="grow">
            <div className="flex justify-around">
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
            <div className="grid grid-cols-3">
                {menuData?.map((menu, i) => (
                    <Button
                        key={`menu-${i}`}
                        onClick={() => setSelectedMenu(menu)}
                        disabled={isLoading}
                    >
                        {menu.name}
                    </Button>
                ))
                }
            </div>
            {selectedMenu && (
                <form onSubmit={handleAddItem}>
                    <div className="flex gap-8">
                        <h2 className="text-lg">{selectedMenu.name}</h2>
                        <h2 className="text-lg">{selectedMenu.unitPrice}</h2>
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
                    <div className="flex gap-8">
                        <Button
                            onClick={() => setSelectedMenu(undefined)}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isLoading}
                        >Add
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}