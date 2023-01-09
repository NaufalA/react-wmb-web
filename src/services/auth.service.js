import UserRole from "../shared/constants/UserRole.js";

const userData = [
    {
        email: "admin@example.com",
        password: "12345678",
        role: UserRole.ADMIN
    }
];

export default function authService() {
    const login = async ({email, password}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = userData.find(u => u.email === email);

                if (!user || user.password !== password) {
                    return reject(new Error("Wrong email or password!"));
                }

                const {password: _, ...res} = user;

                return resolve({user: res});
            }, 1000);
        })
    };

    const logout = async () => {
        try {
            return true;
        } catch (error) {
            throw error;
        }
    };

    return {login, logout};
}
