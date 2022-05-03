const {TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi ({
    appKey : "3bDP6BxxiE2byDwszl3zEhngq",
    appSecret : "PlVPacxVJZKlH0KcIQUjVufEauQOzn9WftgDtvTDFhD3siAbzz",
    accessToken : "1280732394723532800-ajMiEQl13NJrspwbzi64EgKhljGPRq",
    accessSecret : "xTGsw3vLbWcYlsJSGRvAHBSBgIVUNhgmh2gUiO0ErePf3"
})

const rwClient = client.readWrite;

module.exports = rwClient;