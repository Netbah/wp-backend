import { Injectable } from '@nestjs/common';
import WooCommerceAPI from '@woocommerce/woocommerce-rest-api';
import { IWooCommerceProduct } from '../../models/IWooCommerceProduct';
import { ConfigService } from '../config.service';

@Injectable()
export class WoocommerceService {
    private wooCommerce: any;
    constructor(private config: ConfigService) {
        this.wooCommerce = new WooCommerceAPI({
            url: config.get('WOO_URL'),
            consumerKey: config.get('WOO_CONSUMER_KEY'),
            consumerSecret: config.get('WOO_COSUMMER_SECRET'),
            wpAPI: true,
            version: 'wc/v1'
        });
    }

    async createProduct(data: IWooCommerceProduct) {
        return await this.wooCommerce.post("products", data);
    }

}
