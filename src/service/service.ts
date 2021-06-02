import UserResponse from "../response/user.response";

interface IUserService {
    getAll(): UserResponse[];
    getUserById(id: string): UserResponse;
    getUserByEmailAndPassword(email: string, password: string): UserResponse;
}

export { IUserService }