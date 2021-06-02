let TYPES = {
    UserController: Symbol.for('UserController'),
    CombustivelController: Symbol.for('CombustivelController'),
    IUserFactory: Symbol.for('UserFactory'),
    ICombustivelFactory: Symbol.for('CombustivelFactory'),
    IUserRepository: Symbol.for('UserRepository'),
    ICombustivelRepository: Symbol.for('CombustivelRepository'),
    IUserMapper: Symbol.for('UserMapper'),
    ICombustivelMapper: Symbol.for('CombustivelMapper'),
    IUserService: Symbol.for('UserService'),
    ICombustivelService: Symbol.for('CombustivelService')
}

export default TYPES;
