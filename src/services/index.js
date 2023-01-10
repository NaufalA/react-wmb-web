import authService from "./auth.service.js";
import menuService from "./menu.service.js";
import tableService from "./table.service.js";
import transactionService from "./transaction.service.js";
import httpClient from "../shared/configs/httpClient.js";

const storage = localStorage, services = {
    auth: authService(httpClient, storage),
    menu: menuService(),
    table: tableService(),
    transaction: transactionService(),
};

export default services;