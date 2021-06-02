interface IMapper<P, R> {
    mapResponseFromModel(model: P): R
}

export default IMapper;