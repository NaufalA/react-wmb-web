import authService from "./auth.service.js";
import menuService from "./menu.service.js";
import tableService from "./table.service.js";
import transactionService from "./transaction.service.js";
import httpClient from "../shared/configs/httpClient.js";
import customerService from "./customer.service.js";

const storage = localStorage, services = {
    auth: authService(httpClient, storage),
    menu: menuService(httpClient),
    table: tableService(httpClient),
    transaction: transactionService(httpClient),
    customer: customerService(httpClient),
};

export default services;