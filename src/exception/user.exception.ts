class UserException extends Error {
    constructor(m: string) {
        super(m);
    }
}

export default UserException;
