export const MenuActionType = {
    ADD_MENU: "menu/add",
    GET_MENU: "menu/get",
    LIST_MENU: "menu/list",
    UPDATE_MENU: "menu/update",
    REMOVE_MENU: "menu/remove",
    SET_LOADING: "menu/set-loading",
    SET_ERROR: "menu/set-error"
};

export const menuAction = {
    addMenu: (newMenu) => ({
        type: MenuActionType.ADD_MENU,
        payload: { newMenu },
    }),
    getMenu: (menu) => ({
        type: MenuActionType.GET_MENU,
        payload: { menu },
    }),
    listMenu: (menuList) => ({
        type: MenuActionType.LIST_MENU,
        payload: { menuList },
    }),
    updateMenu: (updatedMenu) => ({
        type: MenuActionType.UPDATE_MENU,
        payload: { updatedMenu },
    }),
    removeMenu: (id) => ({
        type: MenuActionType.REMOVE_MENU,
        payload: { id },
    }),
    setLoading: (loading) => ({
        type: MenuActionType.SET_LOADING,
        payload: { loading }
    }),
    setError: (error) => ({
        type: MenuActionType.SET_ERROR,
        payload: { error }
    })
};