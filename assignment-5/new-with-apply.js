function construct(Class) {
    var objectFactory = Class.bind.apply(Class, arguments);
    return new objectFactory;
}