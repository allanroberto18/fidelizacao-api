import UserResponse from "../response/user.response";

interface IService<Response> {
    getAll(): Response[];
    getUserById(id: string): Response;
}

interface IUserService extends IService<UserResponse>{
    getUserByEmailAndPassword(email: string, password: string): UserResponse;
}

export { IService, IUserService }