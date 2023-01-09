import authService from "./auth.service.js";
import menuService from "./menu.service.js";

const services = {
    auth: authService(),
    menu: menuService(),
}

export default services;