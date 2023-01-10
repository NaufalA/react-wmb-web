export default class ErrorResponse {
    code = 400;
    message = "ERROR";
    reason;
    constructor(code, message, reason) {
        this.code = code;
        this.message = message;
        this.reason = reason;
    }
}