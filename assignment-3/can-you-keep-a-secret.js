function createSecretHolder(secret) {
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (secretValue) {
             secret = secretValue;
        }
    }
}