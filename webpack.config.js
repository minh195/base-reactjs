const {resolve} = require("path");
module.exports = (env, options) => ({
    resolve: {
        alias: {
            client: resolve(__dirname, 'client/') // added this
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
})
