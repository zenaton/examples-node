// load .env file
require("dotenv").load();

var app_id = process.env.ZENATON_APP_ID;
if (!app_id) {
    console.log("Please add your Zenaton application id on '.env' file (https://zenaton.com/app/api)");
    process.exit(1);
}

var api_token = process.env.ZENATON_API_TOKEN;
if (!api_token) {
    console.log("Please add your Zenaton api token on '.env' file (https://zenaton.com/app/api)");
    process.exit(1);
}

var app_env = process.env.ZENATON_APP_ENV;
if (!app_env) {
    console.log("Please add your Zenaton environment on '.env' file (https://zenaton.com/app/api)");
    process.exit(1);
}

// init Zenaton client
require("zenaton").Client.init(app_id, api_token, app_env);
