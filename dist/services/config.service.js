"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
class ConfigService {
    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.envConfig = {
                WOO_URL: process.env.WOO_URL,
                WOO_CONSUMER_KEY: process.env.WOO_CONSUMER_KEY,
                WOO_COSUMMER_SECRET: process.env.WOO_COSUMMER_SECRET
            };
        }
        else {
            this.envConfig = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV}.env`));
        }
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map