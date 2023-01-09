import authService from "./auth.service.js";
import menuService from "./menu.service.js";
import tableService from "./table.service.js";
import transactionService from "./transaction.service.js";

const services = {
    auth: authService(),
    menu: menuService(),
    table: tableService(),
    transaction: transactionService(),
}

export default services;