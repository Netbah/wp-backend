import { ProductDto } from '../../models/ProductDto';
import { ConfigService } from '../config.service';
export declare class WoocommerceService {
    private config;
    private wooCommerce;
    constructor(config: ConfigService);
    createProduct(data: ProductDto): Promise<ProductDto>;
}
