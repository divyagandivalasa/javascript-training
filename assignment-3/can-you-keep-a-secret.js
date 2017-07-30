function createSecretHolder(secret) {
    var updatedSecretValue = secret;
    return {
        getSecret: function () {
            return updatedSecretValue;
        },
        setSecret: function (secret) {
            updatedSecretValue = secret;
        }
    }
}