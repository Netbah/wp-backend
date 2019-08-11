import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        if (process.env.NODE_ENV === "production") {
            this.envConfig = {
                WOO_URL: process.env.WOO_URL,
                WOO_CONSUMER_KEY: process.env.WOO_CONSUMER_KEY,
                WOO_COSUMMER_SECRET: process.env.WOO_COSUMMER_SECRET
            }
        } else {
            this.envConfig = dotenv.parse(fs.readFileSync(`${process.env.NODE_ENV}.env`));
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}