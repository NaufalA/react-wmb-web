import authService from "./auth.service.js";
import menuService from "./menu.service.js";
import tableService from "./table.service.js";

const services = {
    auth: authService(),
    menu: menuService(),
    table: tableService(),
}

export default services;