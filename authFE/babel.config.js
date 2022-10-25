module.exports = {
    "presets": [
        "@babel/preset-env",
        // run time : automatic resolve React undfined error
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],
        "@babel/preset-typescript"
    ]
}