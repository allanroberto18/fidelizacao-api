import User from '../model/user.model';

const users: User[] = [
    {
        id: "ABC-123",
        idBandeira: 1,
        nome: "allan roberto",
        email: "allanroberto18@gmail.com",
        telefone: "+49 (0162) 407-8181",
        senha: "Alr281863!"
    },
    {
        id: "ABC-345",
        idBandeira: 1,
        nome: "jhennifer t f silva",
        email: "jhennifer.teixeira@gmail.com",
        telefone: "+49 (0162) 430-8383",
        senha: "ln824253"
    },
];

export const userFactory = () => {
    return users;
}
