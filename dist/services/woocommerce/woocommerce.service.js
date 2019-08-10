"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const woocommerce_rest_api_1 = require("@woocommerce/woocommerce-rest-api");
const config_service_1 = require("../config.service");
let WoocommerceService = class WoocommerceService {
    constructor(config) {
        this.config = config;
        this.wooCommerce = new woocommerce_rest_api_1.default({
            url: config.get('WOO_URL'),
            consumerKey: config.get('WOO_CONSUMER_KEY'),
            consumerSecret: config.get('WOO_COSUMMER_SECRET'),
            wpAPI: true,
            version: 'wc/v1'
        });
    }
    async createProduct(data) {
        const result = await this.wooCommerce.post("products", data);
        return result.data;
    }
};
WoocommerceService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], WoocommerceService);
exports.WoocommerceService = WoocommerceService;
//# sourceMappingURL=woocommerce.service.js.map